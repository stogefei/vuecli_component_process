const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  publicPath: "./",
  assetsDir: "./",
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: 'css/main.css',
          auto: () => false
        }
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    externals: process.env.NODE_ENV === 'development' ? {}: {
      // 'vue': 'Vue',
      'pinia': 'pinia',
      'ant-design-vue': 'ant-design-vue',
    },
    resolve: {
      alias: {
        "@": resolve("src"),
        "@packages": resolve("packages"),
        "@utils": resolve("utils")
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '...'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/main.css'
      }),
    ],
  },
  chainWebpack: (config) => {
     const filename = `[name].[ext]`
      // 更改字体的输出路径
      config.module
      .rule("fonts")
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .set("type", "asset/resource")
      .set("generator", {
        publicPath:'../',
        filename: 'font/' + filename,
      });
      // 更改图片的输出路径
      config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|avif)(\?.*)?$/)
      .set("type", "asset/resource")
      .set("generator", {
        publicPath:'../',
        filename: 'img/' + filename,
      });
      // 更改svg的输出路径
      config.module
      .rule("svg")
      .test(/\.(svg)(\?.*)?$/)
      .set("type", "asset/resource")
      .set("generator", {
        publicPath:'../',
        filename: 'img/' + filename,
      });
  }
})
