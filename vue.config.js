const path = require('path');
const fs = require('fs');

const resolve = dir => {
  return path.join(__dirname, dir);
};

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/

const env = process.env.NODE_ENV || 'development';

fs.writeFileSync(path.join(__dirname, './config/env.js'), `export default '${env}'
`);

const BASE_URL = env === 'production'
  ? '/'
  : '/';

module.exports = {
  publicPath: BASE_URL,
  // baseUrl: BASE_URL,//vue cli.3.3废除了此项配置，改写publicPath
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  },
  productionSourceMap: false, // 设为false打包时不生成.map文件
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 51000,
    compress: true,
    disableHostCheck: true,
    // 开发环境需要代理时放开注释文件
    // proxy:
    // {
    //   // proxy中的target为前端项目调用接口的基础路径，来解决跨域，
    //   // 本地开发环境的axios的baseUrlPurchase要写为 '/api' 用来做统一代理
    //   '/api': {
    //     target: 'http://127.0.0.1:8081',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    // }
  }
};
