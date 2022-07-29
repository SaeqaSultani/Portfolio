const form = document.querySelector('.form');

form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.name').value,
    email: document.querySelector('.email').value,
    message: document.querySelector('.message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(formInfo));
});

const dash = JSON.parse(localStorage.getItem('formContent'));
document.querySelector('.name').value = dash.name;
document.querySelector('.email').value = dash.email;
document.querySelector('.message').value = dash.message;