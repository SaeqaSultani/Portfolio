const icon = document.querySelector('.mob');
const close = document.querySelector('.close-link');
const menuLink = document.querySelector('.menu-links');
const nav = document.querySelectorAll('.nav-link');

icon.addEventListener('click', () => {
  menuLink.style.display = 'flex';
  icon.style.display = 'none';
  nav.forEach((n) => n.addEventListener('click', () => {
    menuLink.style.display = 'none';
    icon.style.display = 'block';
  }));
});

close.addEventListener('click', () => {
  menuLink.style.display = 'none';
  icon.style.display = 'block';
});