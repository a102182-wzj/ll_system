const autoprefixer = require('autoprefixer')
const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
console.log(process.env.VUE_API_URL)
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/', // 访问公共资源的位置 相对服务器和nginx访问路径
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/order/', // 访问公共资源的位置 相对服务器和nginx访问路径
  outputDir: 'order', // 打包的目录
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap,
  devServer: {
    // open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    proxy: {
      '/api': {
        target: 'https://uatservice.caizidao.com.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }

  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('public', resolve('public'))
    // 我们提到了不建议使用 prefetch 功能，因为浏览器不知道什么时候是“空闲”，在资源很多时，图片还没加载完毕就会去加载其他资源，很不友好，所以可以将其删除：
    config.plugins.delete('prefetch')
    config.resolve.symlinks(true) // 修复热更新失效
    // config.entry('main').add('babel-polyfill')

  },
  css: {
    // 开启CSS样式分离，开发环境下，默认为false，extract默认为false的时候，vue-skeleton-webpack-plugin自定义样式不生效，一片空白的
    extract: process.env.NODE_ENV !== 'development',
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
        ]
      }
    }
  }
}