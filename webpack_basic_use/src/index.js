// 1,使用ES6语法导入第三方包jQuery
import $ from 'jquery'
// 导入样式(在 webpack 中,一切皆模块,都可以通过ES6语法导入和使用)
import './css/index.css'
// 定义jQuery的入口函数
$(function(){
    // 实现奇偶行变色
    $('li:odd').css('background-color','blue')
    $('li:even').css('background-color','yellow')
})