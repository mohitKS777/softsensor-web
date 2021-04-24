const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/slide/',
    createProxyMiddleware({
      target: 'https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/',
      changeOrigin: true,
    })
  );
};