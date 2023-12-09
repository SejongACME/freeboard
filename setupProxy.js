const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/react-app',
    createProxyMiddleware({
      target: 'http://localhost:8081',  // React 앱이 실행 중인 포트
      changeOrigin: true,
    })
  );
};
