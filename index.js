const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// すべてのリクエストをkanimayo.f5.siにプロキシ
app.use('/', createProxyMiddleware({
  target: 'https://map.kanimayo.f5.si/',
  changeOrigin: true,
  ws: true,
  secure: false // 証明書が自己署名などの場合に必要
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Reverse proxy server is running at http://localhost:${PORT}`);
});
