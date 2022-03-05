const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
//hamburger styling
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('light-up');
});
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('light-up');
}));

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        if(navbar.classList.contains('light-up')){
            navbar.classList.remove('light-up');
        }
    }
    else{
        if(hamburger.classList.contains('active')){
            navbar.classList.add('light-up');
        }
        else{
            navbar.classList.remove('light-up');
        }
    }
})