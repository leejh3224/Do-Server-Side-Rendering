const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { HashedModuleIdsPlugin } = require('webpack')

const appPath = {
    dist: path.resolve(process.cwd(), 'dist'),
    client: {
        main: path.resolve(process.cwd(), 'src/index.jsx')
    },
    server: {
        server: path.resolve(process.cwd(), 'server/index.js')
    }
}

const baseConfig = {
    output: {
        path: appPath.dist,
        filename: '[name].[contenthash].js',
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
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new HashedModuleIdsPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

const baseClientConfig = {
    ...baseConfig,
    entry: appPath.client,
    plugins: [
        ...baseConfig.plugins,
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

const baseServerConfig = {
    ...baseConfig,
    entry: appPath.server,
    output: {
        path: appPath.dist,
        filename: '[name].js',
        publicPath: '/dist'
    },
    target: 'node',
    externals: [
        nodeExternals({
            // yarn workspace issue: https://stackoverflow.com/questions/46010926/how-to-use-webpack-with-a-monorepo-yarnpkg-workspaces
            // it should reference node_modules reside in root dir
            modulesDir: path.resolve(process.cwd(), '../../node_modules')
        })
    ],
    optimization: {
        ...baseConfig.optimization,
        runtimeChunk: false
    }
}

module.exports = {
    baseClientConfig,
    baseServerConfig
}
