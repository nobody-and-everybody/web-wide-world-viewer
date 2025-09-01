import express from 'express';
import path from 'path';
import send from 'send';
import url from 'url';
import http from 'http';
import https from 'https';
import fs from 'fs';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const app = express();

// 设置安全相关的响应头
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Content-Security-Policy', "worker-src 'self' blob:; child-src 'self' blob:;");
    next();
});

// HTTPS配置
const httpsOptions = {
    key: fs.readFileSync(path.join(dirname, 'certificates', 'key.pem')),
    cert: fs.readFileSync(path.join(dirname, 'certificates', 'cert.pem'))
};

// HTTP重定向到HTTPS
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.secure) {
        return res.redirect(302, `https://${req.headers.host}${req.url}`);
    }
    next();
});

// 阻止访问 server 目录
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`[防止访问server目录] 请求路径: ${req.url}, 方法: ${req.method}`);
    if (req.url.startsWith('/server/')) {
        console.log(`[防止访问server目录] 拦截到对server目录的访问`);
        return res.status(403).send('Forbidden');
    }
    next();
});

// 使用 send 库处理文件请求
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`[send库处理] 请求路径: ${req.url}, 方法: ${req.method}`);
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        return next();
    }
    
    console.log(`[send库处理] 尝试发送文件: ${path.join(dirname, '..', req.url)}`);
    
    send(req, req.url, {
        root: path.join(dirname, '..'),
        index: false,
        etag: true,
        lastModified: true,
        cacheControl: true,
        dotfiles: 'deny'
    })
    .on('error', (err: Error & { status?: number }) => {
        console.log(`[send库处理] 错误: status=${err.status}, message=${err.message}`);
        if (err.status === 404 || err.status === 403) {
            return next();
        }
        next(err);
    })
    .pipe(res);
});

// 设置静态文件目录
app.use(express.static(path.join(dirname, '..'), {
    setHeaders: (res: express.Response) => {
        res.set('Accept-Ranges', 'bytes');
    }
}));

// 处理真正的 404 错误 - 对于明确的文件扩展名请求
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 检查是否是静态资源请求（有文件扩展名）
    const fileExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.json', '.xml', '.txt', '.glb', '.ksplat', '.splat', '.ply', '.pem', '.key'];
    const hasFileExtension = fileExtensions.some(ext => req.url.toLowerCase().endsWith(ext));
    
    if (hasFileExtension) {
        console.log(`[404处理] 静态资源未找到: ${req.url}`);
        return res.status(404).send(`File not found: ${req.url}`);
    }
    
    next();
});

// 设置所有路由都返回 index.html，以支持 SPA
app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(dirname, '..', 'index.html'));
});

const httpPort: number = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT, 10) : 80;
const httpsPort: number = process.env.HTTPS_PORT ? parseInt(process.env.HTTPS_PORT, 10) : 443;

// 创建 HTTPS 服务器
https.createServer(httpsOptions, app).listen(httpsPort, () => {
    console.log(`HTTPS Server is running on https://localhost:${httpsPort}`);
});

// 创建 HTTP 服务器 (用于重定向到 HTTPS)
http.createServer(app).listen(httpPort, () => {
    console.log(`HTTP Server is running on http://localhost:${httpPort}`);
});