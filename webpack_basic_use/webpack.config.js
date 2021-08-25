const path = require('path');
// 引入 webpack 的 HTML 插件,得到一个构造函数
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 创建 插件的实例对象
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    // 指定源文件的存放路径
    template: './src/index.html',
    // 指定生成的文件存放路径(在内存中生成)
    filename: './index.html'
})
module.export = {
    mode:'development',
    // 打包入口文件路径
    entry : path.join(__dirname,'./src/index.js'),
    // 打包出口文件存放路径
    output : {
        path: path.join(__dirname,'dist'),
        // 生成的文件名称
        filename:'bundle.js'
    },
    // 把插件挂载到 webpack(使用插件),在webpack 运行的时候,会加载并且调用这些插件
    plugins: [htmlWebpackPlugin],
    devServer:{
        // 初次打包完成后,自动打开浏览器
        open:true,
        // 实时打包所使用的主机地址
        host:'127.0.0.1',
        // 实时打包所使用的端口号
        port:80
    },
    module: {
        rules: [
            // 定义了不同模块对应的 loader 
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            // 处理图片文件的 loader
            // 如果需要调用的loader 只有一个,则只传递一个字符串,如果多个,需要用数组
            {
                test:/\.jpg|png|gif$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}