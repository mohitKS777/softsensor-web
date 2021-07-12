"use strict";

var _require = require("http-proxy-middleware"),
  createProxyMiddleware = _require.createProxyMiddleware;

module.exports = (app) => {
  // app.use(
  //   '/slide/*',
  //   createProxyMiddleware({
  //     target: 'https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/',
  //     changeOrigin: true,
  //   })
  // );
};
