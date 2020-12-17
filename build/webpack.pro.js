'use strict'

const path = require('path')
const merge = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_ENV
const webpackPro = merge(webpackBase, {
    mode: 'production',
    devtool: '#hidden-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                elementUI: {
                    name: "chunk-elementUI", // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/
                }
            }
        },
        minimizer: [new OptimizeCSSAssetsPlugin()],

        // runtimeChunk:true
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new CleanWebpackPlugin(
            ['dist/static'],
            {
                root: path.resolve(__dirname, '../'),
                verbose: true,
                dry: false
            }
        ),
        new BundleAnalyzerPlugin()
    ]
})


webpack(webpackPro, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
        console.error(err);
        return;
    }
    // 处理完成
    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }))
})