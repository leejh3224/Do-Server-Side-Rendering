const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new CleanWebpackPlugin('dist')]
}

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
    entry: {
        main: './src/index.jsx'
    },
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
    entry: {
        server: './server/index.js'
    },
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
