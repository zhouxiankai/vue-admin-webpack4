'use strict'

const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: ['babel-loader']
      },
      // ,'eslint-loader'
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(less|css)/,
        use: [
          'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      // favicon: path.resolve(__dirname, '../static/images/favicon.ico'),
      // inject: true,
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/style.css'
    })
  ]
}