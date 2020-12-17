'use strict'

const merge = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const webpack = require('webpack')

const webpackDev = merge(webpackBase, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8002,
    compress: true,
    hot: true,
    clientLogLevel: 'warning', // 能隐藏热更替 控制台的进度
    historyApiFallback: true,
    overlay: {
      error: true
    },
    publicPath: '/'
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackDev