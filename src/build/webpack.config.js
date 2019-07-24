const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
console.log('-------baseConfog------', baseConfig)
const devConfig = require('./webpack.dev.config')
console.log('-----devconfig-----', devConfig)
const proConfig = require('./webpack.pro.config')
console.log('-----proConfig-----', proConfig)


let config = process.NODE_ENV === 'development' ? devConfig: proConfig
console.log(config)
module.exports = merge(baseConfig, config)