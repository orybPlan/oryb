const path = require('path');
const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';

module.exports = {
  publicPath, // 基本路径
  outputDir: 'dist', // 输出文件目录，默认'dist'
  assetsDir: 'static', // 静态文件存储文件夹，默认''
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/style/mixin.scss';
        `,
      },
    },
  },
  // webpack-dev-server 相关配置
  // devServer: {
  //   open: true,
  //   hot: true,
  //   https: false,
  //   proxy: {
  //     '/oryb': {
  //       target: 'http://347.103.44.69:8080/oryb/api', // 服务器地址
  //       pathRewrite: {
  //         '^/oryb/api': '',
  //       },
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // webpack的配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      return {
        optimization: {
          splitChunks: {
            chunks: 'all', // async 只对异步加载的模块进行拆分，可选值还有all | initial
            minSize: 30000, // 模块最少大于30KB才拆分
            maxSize: 0,  // 模块大小无上限，只要大于30KB都拆分
            minChunks: 1, // 模块最少引用一次才会被拆分
            maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5,超过5的部分不拆分
            maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3,超过3的部分不拆分
            automaticNameDelimiter: '~', // 默认的连接符
            name: true,
            cacheGroups: {
              libs: {
                chunks: "initial",
                name: "chunk-libs",
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
              },
              elementUI: {
                chunks: 'all',
                test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
                priority: 20,
                name: 'element',
                reuseExistingChunk: true,
              },
              commons: {
                chunks: "all",
                name: "chunk-comomns",
                minChunks: 2, // 最小共用次数
                priority: 5,
                reuseExistingChunk: true
              },
            }
          }
        },
        plugins: []
      }
    } else {
      // 为开发环境修改配置
    }

  },
};
