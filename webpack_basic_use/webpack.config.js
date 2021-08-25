const path = require('path');
module.export = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
        path: path.resolve(__dirname,'dist')
    }
}