const form = document.getElementById('contactForm');

form.addEventListener('input', () => {

    const nameFild = document.getElementById('name');
    const emailFild = document.getElementById('email');
    const textFild = document.getElementById('message');


  const formElement = {
    name: nameFild.value,
    email: emailFild.value,
    message: textFild.value
  };

  localStorage.setItem('dataForm', JSON.stringify(formElement));
});

const save = JSON.parse(localStorage.getItem('dataForm'));
document.getElementById('.name').value = save.name;
document.getElementById('.email').value = save.email;
document.getElementById('.message').value = save.message;