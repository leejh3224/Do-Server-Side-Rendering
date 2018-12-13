const { baseClientConfig, baseServerConfig } = require('./webpack-config')
const errorHandler = require('./errorHandler')

module.exports = {
    errorHandler,
    baseClientConfig,
    baseServerConfig
}
