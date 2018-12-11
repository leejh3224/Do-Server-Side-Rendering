const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new CleanWebpackPlugin('dist')]
}

const clientConfig = {
    ...baseConfig,
    entry: {
        main: './src/index.jsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

const serverConfig = {
    ...baseConfig,
    entry: {
        server: './server/index.js'
    },
    target: 'node',
    externals: [nodeExternals()]
}

module.exports = [clientConfig, serverConfig]
