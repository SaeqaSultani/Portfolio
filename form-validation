const contactForm = document.querySelector('.form');
const validationMessage = document.querySelector('.validationMessage');
const emailInput = document.querySelector('.email');

contactForm.addEventListener('submit', (par) => {
  const stringMessage = emailInput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validationMessage.innerHTML = 'You are supposed to use lowercase for the email.';
    par.preventDefault();
  } else {
    validationMessage.innerHTML = '';
  }
});
