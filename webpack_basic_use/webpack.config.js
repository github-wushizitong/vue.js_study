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
        path: path.join(__dirname,'dist')
    },
    // 把插件挂载到 webpack(使用插件),在webpack 运行的时候,会加载并且调用这些插件
    plugins: [htmlWebpackPlugin]
}