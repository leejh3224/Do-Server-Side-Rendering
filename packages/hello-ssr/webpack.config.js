const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        client: './src/client.jsx',
        bundle: './src/bundle.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
}
