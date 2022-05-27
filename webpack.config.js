const path = require('path')
module.exports={
    entry: './src/index.js',//入口
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist'),//出口路径
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use:['style-loader','css-loader']
        },{
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource"
        }]
    }
}
