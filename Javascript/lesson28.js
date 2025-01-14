// var button1 = document.querySelector("button")

// var button1 = document.addEventListener('click', function (){
//     alert ('hello world')
// })


// var button2 = document.getElementById('btn1')
// var button3 = document.getElementById('btn2')
// var button4 = document.getElementById('btn3')


// button2.onmouseover = function(){
//     alert('over?'
// }

// button3.onmouseleave = function(){
//     alert('leave')
// }
// button4.onmousewheel= function(){
//     alert('wheel')
// }


// var v_button1 = document.getElementById ('btn1')
// var v_text = document.getElementById('txt1')

// v_button1.onclick = function() {
//     // v_text.style.color = 'red'
//     // v_text.style.backgroundColor = 'lightgrey'
//     v_text.setAttribute('class', 'text');
// }

//  v_text.onmouseover = function () {
//     v_text.style.cssText = 'color:red; background:lightblue; padding:20; font-size:180px;'

// }

var btn_circle = document.getElementById('circle');
var btn_rectangle = document.getElementById('rectangle');
var btn_Triangle = document.getElementById('triangle');

var circle = document.getElementById('circle')
var rect = document.getElementById('rectangle')
var tri = document.getElementById('triangle')

btn_circle.onclick = function () {
    circle.setAttribute('class','circle_shape')
}
btn_rectangle.onclick = function () {
    circle.setAttribute('class','rectangle_shape')
}
btn_circle.onclick = function () {
    circle.setAttribute('class','triangle_shape')
}
