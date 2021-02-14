const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelector('.has-fade');

btnHamburger.addEventListener('click',function() {
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-int');
            element.classList.add('fade-out');

        });
    }
    else{
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-int');

        });
    }
})
