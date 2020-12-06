import './styles/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const menu = document.getElementById("menu");
const hero = document.getElementById ("hero");
const navbar = document.querySelector('.header__navbar');
const listItem = document.querySelector('.menu__point');



hamburger.addEventListener('click', () => {
    menu.classList.toggle("show")
    hero.classList.toggle("hide")
    navbar.classList.toggle("change")
});


// listItem.addEventListener('click', () => {
//     menu.classList.toggle("hide")
// });




