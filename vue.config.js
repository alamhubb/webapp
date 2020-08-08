module.exports = {
  publicPath: '/',
  devServer: {
    disableHostCheck: true,
    // 防止控制台报错 localhost:8080无法连接
    host: '0.0.0.0',
    port: 8086,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api': {
        target: 'https://www.qingchi1.com',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
