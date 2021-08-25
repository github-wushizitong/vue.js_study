const path = require('path');
module.export = {
    mode:'development',
    // 打包入口文件路径
    entry : path.join(__dirname,'./src/index.js'),
    // 打包出口文件存放路径
    output : path.join(__dirname,'./dist'),
    // 指定输出文件的名称
    filename : 'bundle.js'
}