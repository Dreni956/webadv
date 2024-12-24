function showMessage() {
    alert('This message is inside the function');
}

showMessage();

function sum(number1,number2) {
    return number1 + number2;
}

console.log(sum(25,5));


function toCelcius (f){
    return (5/9) * (f-32);
}
console.log('54 fahrnheit is equal to' +toCelcius(54)+'celsius.');

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toCelcius(60));

function triangleArea(baseLength, height){
    return 0.5 * baseLength *height;
}
console.log(triangleArea(5,7));

function dsfunction(){
    var localvar = 'Digital School';
    alert(localvar);
}
dsfunction();
// alert(localvar);
// Arrow Function

var arowFunction = () => alert('Hello World');

arrowFunction();

var arrowFunction = name => alert(`Hello ${name}`);
arrowFunction('John Doe');

// Object

var car = {
    name:'BMW',
    color:'blue',
    year:2020,
    kilometers:0,
    startEngine: function() {
        alert('vroooommmmm')
    },
    get getkilometers(){
        return this.kilometers;
    },

    set setKilometers(km){
        this.kilometers = km;
    }
}


console.log(car.getKilometers);

car.setKilometers = 100;

console.log(car.getKilometers);


var computer = new Object();

computer.name = 'Lenovo';
computer.CPU = 'Intel core i7';
computer.RAM = '16GB';
computer.GPU = 'Geforce GT730 2GB Dual Dp HP';

computer.type = function(){
    return this.name + ',' + this.CPU + ',' + this.RAM + ',' + this.GPU;
}
alert(computer.CPU);
alert(computer.type());


