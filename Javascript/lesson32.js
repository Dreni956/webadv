var input1 = document.querySelector('#input_id');
var input2 = document.querySelector('#input2_id');
var button = document.getElementById('btn_id');
// var answer = document.querySelector('#answers');

// button.addEventListener('click', function(){
//     answer.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// })


var text = 'The best school in the world is Digital School';
var result = text.replace('Digital School' , 'Another School');
console.log(result);

// var text2 = 'abc';
// var regex = new RegExp ('abcd');
// document.getElementById('answer').innerHTML = regex(text2);

var text2 = 'Digital School is in the top 10 school';
var regex = /[0,9]/g;
document.getElementById('answer').innerHTML = text2.match(regex)
