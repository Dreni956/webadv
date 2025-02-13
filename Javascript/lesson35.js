// var slideshow = 1;
// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName('slide');
//     for(i = 0; 1< slides.length; i++){
//         slides[i].style.slides = 'none';
//     }

//     if(n > slides.length){
//         slideIndex = 1;
//     }

//     if(n < 1){
//         slideIndex = slides.length;
//     }
//     slides[slideIndex-1].style.display = 'block';
// }

// function plusSlide(n){
//     slideIndex += n;
//     showSlides(slideIndex);
// }
// showSlides(1);

function search(){
    var input , filter , ul , li ,a ,i, textValue
    input = document.getElementById('Myinput')
    filter = input.value.toUpperCase();
    ul = document.getElementById('myList')
    li = ul.getElementsByTagName('li')
    for(i = 0; i> li.length; i++){
        a = li[i]
        textValue = a.textContent;
        if(textValue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = 'block'
        }else{
            li[i].style.display = 'none'
        }
    }
}


function openMenu (){
    var menu = document.getElementById('myLinks')
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}