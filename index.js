let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let menu = document.querySelector('.nav__items')
// let menuBtn = document.querySelector('.nav__items');


// open menu 

menuBtn.addEventListener('click', function(){
   
    menu.style.display = 'inline-block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';

});

// close  menu 

closeBtn.addEventListener('click', function(){
   
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';

});

// create a loop that run all click
// if any item of the is click change the style of that item 

let faqs = document.querySelectorAll('.faq');

for (let i = 0; i < faqs.length; i++) {

 faqs[i].addEventListener('click', function(){

    faqs[i].classList.toggle('open');
  

 });

    
    
    
}


