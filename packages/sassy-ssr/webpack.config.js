const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { baseClientConfig, baseServerConfig } = require('@junhyung3224/common')

const loaders = {
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
    ...baseClientConfig,
    module: {
        rules: [
            baseClientConfig.module.rules[0],
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, loaders.css, loaders.scss]
            }
        ]
    },
    plugins: [
        ...baseClientConfig.plugins,
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const serverConfig = {
    ...baseServerConfig,
    module: {
        rules: [
            baseServerConfig.module.rules[0],
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
