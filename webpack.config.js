const path = require('path')
module.exports={
    entry: './src/index.js',//入口
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist'),//出口路径
    }
}
