const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/user/login"], {
      target: "http://localhost:5000"
    })
  );
};
