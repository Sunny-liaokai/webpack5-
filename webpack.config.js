const path = require('path')
/*根据依引入的文件自动打包成html文件*/
const  HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    mode: "development",//开发模式
    entry: {
        index:'./src/index.js',
        print:'./src/print.js'
    },
    devtool: 'inline-source-map',//打包以后详细知道代码报错的位置模式
    devServer: {
        static:'./dist'//告诉dev server每次文件发生改变更新哪些文件 热更新
    },
    output: {
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),//出口路径
        clean:true,//每次打包前清理dist文件夹
        publicPath: "/" //打包后资源的目录
    },
    plugins: [
        new HtmlWebpackPlugin({
            /*页面标题*/
            title: "Development"
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
    },
    optimization: {//html页面有多个文件入口 所以要添加这个否则会有问题
        runtimeChunk: "single"
    },
}
