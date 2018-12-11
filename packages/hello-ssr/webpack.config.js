const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { webpackConfig } = require('@junhyung3224/common/index.common')

const { baseConfig, appPath } = webpackConfig

const clientConfig = {
    ...baseConfig,
    entry: appPath.client,
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

const serverConfig = {
    ...baseConfig,
    entry: appPath.server,
    target: 'node',
    externals: [nodeExternals()]
}

module.exports = [clientConfig, serverConfig]
