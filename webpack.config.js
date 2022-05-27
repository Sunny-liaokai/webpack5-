const path = require('path')
/*根据依引入的文件自动打包成html文件*/
const  HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    entry: {
        index:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),//出口路径
        clean:true,//每次打包前清理dist文件夹
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "管理输出"
        })
    ],
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
