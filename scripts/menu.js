let menuBtn = document.querySelector('.menu-burger');
let menu = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})