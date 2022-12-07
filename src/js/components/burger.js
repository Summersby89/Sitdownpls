const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.header__bottom-nav-list-link');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('menu-active');
  body.classList.toggle('lock');
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove('burger-active');
    burgerMenu.classList.remove('menu-active');
    body.classList.remove('lock');
  })
});
