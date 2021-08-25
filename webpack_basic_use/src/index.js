// 1,使用ES6语法导入第三方包jQuery
import $ from 'jquery'
// 导入样式(在 webpack 中,一切皆模块,都可以通过ES6语法导入和使用)
import './css/index.css'
import './css/index.less'

// 1, 导入图片,得到图片文件
import logo from './images/logo.jpg'
// 打印的是一个 base64 格式的图片
console.log(logo);
// 2,给img标签的src动态赋值
$('.box').attr('src',logo);
// 定义jQuery的入口函数
$(function(){
    // 实现奇偶行变色
    $('li:odd').css('background-color','blue')
    $('li:even').css('background-color','yellow')
})

// 定义装饰器函数
function info (target){
    target.info = 'Person info'
}
// 定义一个普通的类
@info
class Person{}
console.log(Person.info);