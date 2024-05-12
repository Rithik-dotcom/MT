// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://my.demio.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1' // optional, if your API endpoints start with /api
      }
    })
  );
};
