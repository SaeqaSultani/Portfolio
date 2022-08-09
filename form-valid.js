const form = document.querySelector('.form');
const text = document.querySelector('.val-text');
const email = document.querySelector('.email');

form.addEventListener('submit', (v) => {

  const str = email.value;
  if (/[a-z]/.test(str)) {
    text.innerHTML = '';
  } else {
    text.innerHTML = 'please use lowercase for the email.';
    v.preventDefault();
  }
});