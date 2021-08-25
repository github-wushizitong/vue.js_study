// 1,使用ES6语法导入第三方包jQuery
import $ from 'jquery'
// 定义jQuery的入口函数
$(function(){
    // 实现奇偶行变色
    $('li:odd').css('background-color','blue')
    $('li:even').css('background-color','yellow')
})