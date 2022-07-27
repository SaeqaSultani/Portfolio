const icon = document.querySelector('.icon-menu');
const menulist = document.querySelector('.internal-link-mob');
const menu = document.querySelectorAll('.menu');
// const main = document.querySelector('.home-page');

const open = () => {
  menulist.classList.add('internal-link-mobActive');
  // main.style.opacity = '0.6';
};

const close = () => {
  menulist.classList.remove('internal-link-mobActive');
  // main.style.opacity = '1';
  // main.style.backdropFilter ='blur(0px)';
};

icon.addEventListener('click', open);
menu.forEach((menuLink) => {
  menuLink.addEventListener('click', close);
});