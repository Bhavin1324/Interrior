const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
//hamburger styling
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}));