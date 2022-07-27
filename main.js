const icon = document.querySelector('.icon-menu');
const menulist = document.querySelector('.internal-link-mob');
const menu = document.querySelectorAll('.menu');
const main = document.querySelector('.main');

const open = () => {
  menulist.classList.add('internal-link-mobActive');
  main.style.opacity = '0.2';
  main.style.backdropfilter = 'blur(8px)';
};

const close = () => {
  menulist.classList.remove('internal-link-mobActive');
  main.style.opacity = '1';
};

icon.addEventListener('click', open);
menu.forEach((menuLink) => {
  menuLink.addEventListener('click', close);
});