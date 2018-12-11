const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { webpackConfig } = require('@junhyung3224/common/index.common')

const { baseConfig, appPath } = webpackConfig

const loaders = {
    babel: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    css: {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            modules: true
        }
    },
    scss: { loader: 'sass-loader' }
}

const clientConfig = {
    ...baseConfig,
    entry: appPath.client,
    module: {
        rules: [
            loaders.babel,
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, loaders.css, loaders.scss]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const serverConfig = {
    ...baseConfig,
    entry: appPath.server,
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            loaders.babel,
            {
                test: /\.scss$/,
                use: [
                    // style-loader that works well on server side
                    { loader: 'isomorphic-style-loader' },
                    loaders.css,
                    loaders.scss
                ]
            }
        ]
    }
}

module.exports = [clientConfig, serverConfig]
