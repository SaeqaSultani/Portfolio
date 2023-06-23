const menu = document.getElementById('menu');
const close = document.getElementById('close');
const openNav = document.getElementById('openNav');
const items = document.getElementsByClassName('item');
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');
const pors = document.getElementsByClassName('por');
const fas = document.getElementsByClassName('fa');

const languages = document.getElementById('languagesContainer');
const languagesPanel = document.getElementById('languagesPanel');

const frameworks = document.getElementById('frameworks');
const frameworksPanel = document.getElementById('frameworksPanel');

const databases = document.getElementById('databases');
const databasesPanel = document.getElementById('databasesPanel');

const skills = document.getElementById('skills');
const skillsPanel = document.getElementById('skillsPanel');

skillsPanel.addEventListener('click', () => {
  if (skills.style.display === 'flex') {
    skills.style.display = 'none';
  } else {
    skills.style.display = 'flex';
    frameworks.style.display = 'none';
    languages.style.display = 'none';
    databases.style.display = 'none';
  }
});

databasesPanel.addEventListener('click', () => {
  if (databases.style.display === 'flex') {
    databases.style.display = 'none';
  } else {
    databases.style.display = 'flex';
    frameworks.style.display = 'none';
    languages.style.display = 'none';
    skills.style.display = 'none';
  }
});

frameworksPanel.addEventListener(('click'), () => {
  if (frameworks.style.display === 'flex') {
    frameworks.style.display = 'none';
  } else {
    frameworks.style.display = 'flex';
    languages.style.display = 'none';
    databases.style.display = 'none';
    skills.style.display = 'none';
  }
});

languagesPanel.addEventListener('click', () => {
  if (languages.style.display === 'flex') {
    languages.style.display = 'none';
    languages.style.opacity = 0;
  } else {
    languages.style.display = 'flex';
    languages.style.opacity = '100%';
    frameworks.style.display = 'none';
    databases.style.display = 'none';
    skills.style.display = 'none';
  }
});

Array.from(fas).forEach((fa) => {
  fa.addEventListener('mouseover', () => {
    audio2.play();
  });
});
Array.from(pors).forEach((por) => {
  por.addEventListener('mouseover', () => {
    audio.play();
  });
});

menu.onclick = () => {
  openNav.style.display = 'block';
  openNav.style.transform = 'translateX(0)';
  openNav.style.animation = 'slideIn ease-in-out 0.3s';
};
menu.onmouseover = () => {
  document.body.style.cursor = 'hand';
};
close.onclick = () => {
  openNav.style.animation = 'slideOut ease-in-out 0.3s';
  openNav.style.transform = 'translateX(100%)';
};
const newItems = [...items];
newItems.forEach((item) => {
  item.onclick = () => {
    openNav.style.display = 'none';
  };
});
const projects = [
  {
    name: 'Budget',
    details: ['Microverse', 'Ruby on Rails App', '2023'],
    description: ' The Budget App allows you to where you can to setup your different budgets, and you can create different categories, and also delete your own categories, and also create new transactions, and also delete your own transactions.',
    fullDescription: 'The Budget App allows you to where you can to setup your different budgets, and you can create different categories, and also delete your own categories, and also create new transactions, and also delete your own transactions.',
    image: './img/budget',
    techs: ['HTML', 'CSS', 'Ruby_on_Rails', 'PostgreSQL'],
    liveLink: 'https://saeqa-budget.onrender.com/users/sign_in',
    sourceLink: 'https://github.com/SaeqaSultani/Budget',
  },
  {
    name: 'Companies',
    details: ['Microverse', 'React App', '2022'],
    description: 'Companies Info is a web app that retrieves gets details about companies from an API, and shows details about each country as Name, Logo, CEO, Price, and Phone.',
    fullDescription: 'Companies Info is a web app that retrieves gets details about companies from an API, and shows details about each country as Name, Logo, CEO, Price, and Phone.',
    image: './img/companies',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React_Router', 'Redux'],
    liveLink: 'https://companies-site.netlify.app/',
    sourceLink: 'https://github.com/SaeqaSultani/react-capstone-project-metrics-webapp',
  },
  {
    name: 'SpaceTravellers',
    details: ['Microverse', 'React App', '2022'],
    description: 'Space Travellers web application is built from upon real live data from the SpaceX API. The main purpose is to build a web application for a company that provides commercial and scientific space travel services.',
    fullDescription: 'Space Travellers web application is built from upon real live data from the SpaceX API. The main purpose is to build a web application for a company that provides commercial and scientific space travel services.',
    image: './img/spaceـtravele',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React_Router', 'Redux'],
    liveLink: 'https://space-travelers-site.netlify.app/',
    sourceLink: 'https://github.com/SaeqaSultani/space-travellers',
  },
  {
    name: 'Chefs pot',
    details: ['Microverse', 'Java Script App', '2022'],
    description: "Chef's pot is a webpack project, and that the purpose of this project is to understand how use JavaScript to make websites dynamic and build basic single page apps,using: ES6 syntax,use ES6 modules,use callbacks, and Promises, and use webpack. ",
    fullDescription: "Chef's pot is a webpack project, and that the purpose of this project is to understand how use JavaScript to make websites dynamic and build basic single page apps,using: ES6 syntax,use ES6 modules,use callbacks, and Promises, and use webpack. ",
    image: './img/chef',
    techs: ['CSS', 'HTML', 'JS'],
    liveLink: 'https://saeqasultani.github.io/JavaScript-capstone-project/',
    sourceLink: 'https://github.com/HabibPayenda/mathMagicians',
  },
];

const techInfo = {
  CSS: {
    img: './img/css.png',
    info: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
  },
  JSX: {
    img: './img/jsx.png',
    info: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.',
  },
  AJAX: {
    img: './img/ajax.png',
    info: 'AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.',
  },
  JS: {
    img: './img/js.png',
    info: 'JavaScript is the worlds most popular programming language. JavaScript is the programming language of the Web.',
  },
  React: {
    img: './img/react logo.png',
    info: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces.',
  },
  Redux: {
    img: './img/redux.png',
    info: 'Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client and server.',
  },
  React_Router: {
    img: './img/reactrouter.png',
    info: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application',
  },
  Ruby_on_Rails: {
    img: './img/rails.png',
    info: 'Rails is a full-stack framework. It ships with all the tools needed to build amazing web apps on both the front and back end.',
  },
  HTML: {
    img: './img/html.png',
    info: 'HTML stands for Hyper Text Markup Language · HTML is the standard markup language for creating Web pages · HTML describes the structure of a Web page',
  },
  PostgreSQL: {
    img: './img/postgresql.png',
    info: 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development.',
  },
};

const worksSection = document.getElementById('Portfolio');
const modalContainer = document.getElementById('modalContainer');

/// //////ModalCreator

const modalCreator = (project, num) => {
  const projectModal = document.createElement('div');
  projectModal.classList.add('projectModal');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-close', 'closeIcon2');
  closeIcon.onclick = () => {
    projectModal.style.display = 'none';
    modalContainer.style.display = 'none';
  };

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('main-title');
  modalTitle.innerText = project.name;

  const modalDetails = document.createElement('ul');
  modalDetails.style.alignSelf = 'flex-start';
  modalDetails.style.marginLeft = '16px';
  modalDetails.style.marginTop = '22px';

  project.details.forEach((detail) => {
    const modalDetailLi = document.createElement('li');
    modalDetailLi.classList.add('sub-item');
    modalDetailLi.innerText = detail;
    modalDetails.append(modalDetailLi);
  });

  const modalImage = document.createElement('div');
  modalImage.classList.add('modal-card-img');
  modalImage.style.backgroundImage = `url(${project.image}B${num}.png)`;

  const modalText = document.createElement('p');
  modalText.classList.add('modal-text');
  modalText.innerText = project.fullDescription;

  const modalTechUsed = document.createElement('ul');
  modalTechUsed.classList.add('tech-used-modal');
  modalTechUsed.style.alignSelf = 'flex-start';
  modalTechUsed.style.marginLeft = '16px';
  project.techs.forEach((item) => {
    const modalTechItem = document.createElement('li');
    modalTechItem.innerText = item;
    modalTechUsed.append(modalTechItem);
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.flexDirection = 'row';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.marginTop = '25px';

  const btnLive = document.createElement('div');
  btnLive.classList.add('see-project', 'modal-see');

  const btnSource = document.createElement('div');
  btnSource.classList.add('see-project', 'modal-see');

  const liveIcon = document.createElement('i');
  liveIcon.classList.add('fas', 'fa', 'fa-external-link');

  const sourceIcon = document.createElement('i');
  sourceIcon.classList.add('fab', 'fa-github');

  const modalSeeLive = document.createElement('a');
  modalSeeLive.innerText = 'See Live';
  modalSeeLive.setAttribute('href', project.liveLink);
  modalSeeLive.setAttribute('target', '_blank');

  btnLive.append(modalSeeLive, liveIcon);

  const modalSeeSource = document.createElement('a');
  modalSeeSource.innerText = 'See Source';
  modalSeeSource.setAttribute('href', project.sourceLink);
  modalSeeSource.setAttribute('target', '_blank');

  btnSource.append(modalSeeSource, sourceIcon);

  const modalDetailsContainer = document.createElement('div');
  modalDetailsContainer.classList.add('modalDetailsContainer');
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('modalTextContainer');
  const rightContainer = document.createElement('div');
  leftContainer.append(modalText);
  buttonContainer.append(btnLive, btnSource);
  rightContainer.append(modalTechUsed, buttonContainer);
  modalDetailsContainer.append(leftContainer, rightContainer);
  projectModal.append(closeIcon, modalTitle, modalDetails, modalImage, modalDetailsContainer);
  modalContainer.append(projectModal);
};

for (let i = 0; i < projects.length; i += 1) {
  const num = i + 1;
  const card = document.createElement('div');
  card.setAttribute('id', JSON.stringify(num));
  card.classList.add('card', `card${num}`);
  const cardImageContainer = document.createElement('div');
  cardImageContainer.classList.add('cardImageContainer');
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-img', `card-img-${num}`);
  cardImage.style.backgroundImage = window.matchMedia('(min-width: 768px)') ? `url(${projects[i].image}B${num}.png)` : `url(${projects[i].image}${num}.png)`;
  cardImageContainer.append(cardImage);
  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container', 'card-details-1');
  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('main-title');
  mainTitle.innerText = projects[i].name;
  const subDeatails = document.createElement('ul');
  projects[i].details.forEach((detail) => {
    const detailLi = document.createElement('li');
    detailLi.classList.add('sub-item');
    detailLi.innerText = detail;
    subDeatails.append(detailLi);
  });
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = projects[i].description;
  const techUsed = document.createElement('ul');
  techUsed.classList.add('tech-used');
  projects[i].techs.forEach((item, index) => {
    const techItemContainer = document.createElement('div');
    techItemContainer.setAttribute('id', index);
    techItemContainer.classList.add('techItemContainer');
    const techItem = document.createElement('li');
    techItem.innerText = item;
    const techItemInfoContainer = document.createElement('div');
    techItemInfoContainer.classList.add('techItemInfoContainer');
    techItemInfoContainer.setAttribute('id', index);
    const techItemInfo = document.createElement('div');
    techItemInfo.setAttribute('id', index);
    techItemInfo.classList.add('techInfo');
    const techInfoImageContainer = document.createElement('div');
    const techItemInfoImage = document.createElement('img');
    techItemInfoImage.classList.add('techInfoImage');
    // eslint-disable-next-line dot-notation
    techItemInfoImage.setAttribute('src', techInfo[item].img);
    techInfoImageContainer.append(techItemInfoImage);
    techInfoImageContainer.classList.add('techInfoImageContainer');
    techItemInfoImage.classList.add('techItemInfoImage');
    const techInfoText = document.createElement('p');
    techInfoText.classList.add('techInfoText');
    techInfoText.innerText = techInfo[item].info;
    techItemInfo.append(techInfoImageContainer, techInfoText);
    techItemContainer.addEventListener('mouseover', () => {
      if (techItemInfoContainer.id === techItemContainer.id) {
        techItemInfoContainer.style.display = 'flex';
      }
    });
    techItemContainer.addEventListener('mouseleave', () => {
      techItemInfoContainer.style.display = 'none';
    });
    techItemInfoContainer.append(techItemInfo);
    techItemContainer.append(techItem, techItemInfoContainer);
    techUsed.append(techItemContainer);
  });

  const seeProject = document.createElement('a');
  seeProject.classList.add('see-project');
  seeProject.innerText = 'See Project';

  seeProject.setAttribute('href', `#${JSON.stringify(num)}`);

  seeProject.onclick = () => {
    modalContainer.style.display = 'flex';
    modalCreator(projects[i], i + 1);
    // seeProject.parentElement.parentElement.setAttribute('id', 'clicked');
  };

  detailsContainer.append(mainTitle, subDeatails, cardText, techUsed, seeProject);
  card.append(cardImageContainer, detailsContainer);
  worksSection.append(card);
}

const form = document.getElementById('form');
const userName = document.getElementById('name');
const nameTag = document.getElementById('nameTag');

userName.addEventListener('focus', () => {
  nameTag.style.display = 'block';
  nameTag.style.transform = 'translateY(-10px)';
  userName.placeholder = '';
});

userName.addEventListener('focusout', () => {
  if (userName.value === '') {
    nameTag.style.display = 'none';
    nameTag.style.transform = 'translateY(0px)';
    userName.placeholder = 'Enter Your Name:';
  }
});

const email = document.getElementById('email');
const emailTag = document.getElementById('emailTag');

email.addEventListener('focus', () => {
  emailTag.style.display = 'block';
  emailTag.style.transform = 'translateY(-10px)';
  email.placeholder = '';
});

email.addEventListener('focusout', () => {
  if (userName.value === '') {
    emailTag.style.display = 'none';
    emailTag.style.transform = 'translateY(0px)';
    email.placeholder = 'Enter Your Email:';
  }
});

const emailText = document.getElementById('emailText');
const textTag = document.getElementById('textTag');

emailText.addEventListener('focus', () => {
  textTag.style.display = 'block';
  textTag.style.transform = 'translateY(-10px)';
  emailText.innerText = '';
});

emailText.addEventListener('focusout', () => {
  if (userName.value === '') {
    textTag.style.display = 'none';
    textTag.style.transform = 'translateY(0px)';
    emailText.innerText = 'Write your message here!';
  }
});

const userDataCheck = !!localStorage.getItem('userData');
if (userDataCheck) {
  const data = JSON.parse(localStorage.getItem('userData'));
  userName.value = data.userName;
  email.value = data.email;
  emailText.value = data.emailText;
}

const message = document.getElementById('email-text');
message.style.color = 'red';
message.innerText = 'Email should be lowercase!';

const checkEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue.match(/[A-Z]/)) {
    message.style.display = 'block';
    return false;
  }
  message.style.display = 'none';
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmail();
});

form.addEventListener('submit', () => {
  const userData = {
    userName: userName.value,
    email: email.value,
    emailText: emailText.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
