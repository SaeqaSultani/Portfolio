const contactForm = document.getElementById('contactForm');
const text = document.getElementById('valid-text');
const email = document.getElementById('email');

contactForm.addEventListener('submit', (v) => {
  const str = email.value;
  if (/[a-z]/.test(str)) {
    text.innerHTML = '';
  } else {
    text.innerHTML = 'pleas use lowercase for the email.';
    v.preventDefault();
  }
});