import './styles/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const menu = document.getElementById("menu");
const hero = document.getElementById ("hero");
const navbar = document.querySelector('.header__navbar');



hamburger.addEventListener('click', () => {
    menu.classList.toggle("show")
    hero.classList.toggle("hide")
    navbar.classList.toggle("change")
});


