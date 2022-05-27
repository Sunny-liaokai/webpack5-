const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

//告知 express 使用 webpack-dev-middleware(中间件)
//以及将webpack.config.js 配置文件作为基础配置

app.use(
    webpackDevMiddleware(compiler,{
        publicPath:config.output.publicPath
    })
)

//将文件 serve到 port 3000
app.listen(3000,()=>{
    console.log('Example app listening on port 3000!\n')
})
