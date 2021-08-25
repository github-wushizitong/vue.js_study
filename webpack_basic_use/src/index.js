// 1,使用ES6语法导入第三方包jQuery
import $ from 'jquery'
// 引入第三方包lodash
import _ from 'lodash'

// 定义jQuery的入口函数
$(function(){
    // 实现奇偶行变色
    $('li:odd').css('background-color','yellow')
    $('li:even').css('background-color','green')
})