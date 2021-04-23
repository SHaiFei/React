const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){

  app.use(createProxyMiddleware('/api', { target: 'http://localhost:5000/' }));

}

// 新版舍弃了proxy，采用的是 createProxyMiddleware 
// const { createProxyMiddleware } = require("http-proxy-middleware");
 
// module.exports = function(app) {
//     app.use("/api",
//         createProxyMiddleware({
//             target: "http://47.105.90.162:8081",                   // 跨域地址
//             changeOrigin: true,
//             pathRewrite: {
//                 "^/api": ""
//             }
//         })
//     );
// }