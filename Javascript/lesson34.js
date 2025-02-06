function names() {
    document.write('John')
    document.write('<br>')
    document.write('Bob')
    setTimeout(function(){document.write('Ana')},2000)
}
printnames();


var color = ['red' , 'blue' , 'purple' , 'green'];
var names = ['John' , 'Bob' , 'Ana' , 'Mark'];

function changebgcolor (){
    document.querySelector('body').style.background = color(Math.floor(Math.random()* color.length));
}

function changename (){
    document.querySelector('p').innerHTML = names(Math.floor(Math.random()* names.length));
}
setInterval(changebgcolor,1000)
setInterval(changename,1000)