// 引入内置模块 路径模块
const path = require('path')

// 使用 node.js 中的导出语法,向外导出一个 webpack 的配置对象
module.exports={
    // 代表 webpack 运行的模式,可选值又两个 development(开发模式) 和 production(生产模式)
    mode:'development',
    // 指定打包入口文件
    entry:path.join(__dirname,'./webpack_source_code'),
    output:{
        path:path.join(__dirname,'./webpack_output'),
        // 生成的文件名称
        filename:'webpack_file.js'
    }
}