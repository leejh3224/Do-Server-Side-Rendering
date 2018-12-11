/** commonjs modules */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports.webpackConfig = {
    baseConfig: {
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
    },
    appPath: {
        client: {
            main: './src/index.jsx'
        },
        server: {
            server: './server/index.js'
        }
    }
}
