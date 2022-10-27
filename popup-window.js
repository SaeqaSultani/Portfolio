const work = document.getElementById('work');

const arrWork = [
  {
    title: 'Companies',
    exprience: {
      company: 'Companies',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/companies.png',
    description: 'Companies is a React and Redux SPA application that displays interesting information about various companies in the world. It fetchs all the information that it displays using API request to a server.',
    language: ['React', 'Redux', 'CSS'],
  },
  {
    title: 'Space Travellers',
    exprience: {
      company: 'Space Travellers',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/space-travellers.png',
    description: 'This web application is built upon real live data from the SpaceX API. The main purpose is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    language: ['React', 'Redux', 'Bootstrap'],
  },
  {
    title: 'Math-Magicians',
    exprience: {
      company: 'Math-Magicians',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/math-magicians.png',
    description: 'Math-Magicians project is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations,Read a random math-related quote.',
    language: ['React', 'CSS', 'javaScript'],
  },
  {
    title: 'Chefs pot',
    exprience: {
      company: 'Chefs pot',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/chefs-pot.png',
    description: 'Chefs pot is a webpack project that the purpose of this project is to understand how use JavaScript to make websites dynamic and build basic single page apps,use ES6 syntax,use ES6 modules,use callbacks and promises.',
    language: ['HTML', 'CSS', 'javaScript'],

  },
  {
    title: 'Leaderboard',
    exprience: {
      company: 'Leaderboard',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/leaderboard.png',
    description: 'this is a webpack project that the purpose of this project is to understand how use callbacks and promises, learn how to use proper ES6 syntax,use ES6 modules to write modular JavaScript and use webpack to bundle JavaScript.',
    language: ['HTML', 'CSS', 'javaScript'],
  },
  {
    title: 'To Do List',
    exprience: {
      company: 'To Do List',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/to-do-list.png',
    description: 'this is a To Do List project that the purpose of this project is to understand how use webpack to bundle JavaScript, learn how to use proper ES6 syntax,use ES6 modules to write modular JavaScript and build a simple HTML list of To Do tasks.',
    language: ['HTML', 'CSS', 'javaScript'],

  },
  {
    title: 'AwesomeBooks',
    image: './images/awesomebooks.png',
    exprience: {
      company: 'AwesomeBooks',
      skill: 'Back End Dev',
      year: '2022',
    },
    description: 'this is a Awesome-books-with-ES6 project that the purpose of this project is to understand how use ES6 modules to write modular JavaScript,learn how to use proper ES6 syntax,understand improvements that ES6 brings to JavaScript,use npm as software packages system.',
    language: ['HTML', 'CSS', 'javaScript'],
  },
  {
    title: 'CapstoneProject',
    exprience: {
      company: 'CapstoneProject',
      skill: 'Back End Dev',
      year: '2022',
    },
    image: 'images/capstone-project.png',
    description: 'This is my first capstone project in this capstone project I managed to build the website based on an online website for an acodemy. using Html,CSS,JavaScript and the provided design guidelines to create the website.',
    language: ['HTML', 'CSS', 'javaScript'],
  },
];

arrWork.forEach((element) => {
  const div = `<div class="sections">
            <div>
                <img src="${element.image}" alt="image" class="image">
            </div>
            <div class="text">
                <h2 class="Tonic">${element.title}</h2>
                <div class="list">
                    <ul>
                        <li class="CANOPY">${element.exprience.company}</li>
                        <li>
                            <a href=""><img src="images/Counter.png" alt="" /></a>
                        </li>
                        <li>${element.exprience.skill}</li>
                        <li>
                            <a href=""><img src="images/Counter.png" alt="" /></a>
                        </li>
                        <li>${element.exprience.year}</li>
                    </ul>
                </div>
                <p>
                ${element.description}
                </p>
                <div class="button-list">
                    <ul>
                        <li><a href="">${element.language[0]}</a></li>
                        <li><a href="">${element.language[1]}</a></li>
                        <li><a href="">${element.language[2]}</a></li>

                    </ul>
                </div>
                <div>
                    <button id="seeProject" class="btn" type="button">See project</button>
                </div>
            </div>
        </div>`;

  work.innerHTML += div;
});

function popupWindow(index) {
  const popup = document.getElementById('popup');

  const popupDiv = `
                <div class="model-container">
                <div class="model-headline">
                  <h2 class="tonic">${arrWork[index].title}</h2>
                  <button type="button" data-close-button class="close-button">&times;</button>
                </div>
                <div class="popupList">
                    <ul>
                        <li class="CANOPY">${arrWork[index].exprience.company}</li>
                        <li>
                            <a href=""><img src="images/Counter.png" alt="" /></a>
                        </li>
                        <li>${arrWork[index].exprience.skill}</li>
                        <li>
                            <a href=""><img src="images/Counter.png" alt="" /></a>
                        </li>
                        <li>${arrWork[index].exprience.year}</li>
                    </ul>
                </div>
                <div class="image-overflow">
                    <img class="mobile-banners-model" src="${arrWork[index].image}" alt="">
                </div>
                <div class="parlist">
                  <p class="descriptionist">
                  ${arrWork[index].description}
                  </p>
                  <div class="lister">

                    <ul class="button-list">
                      <li><a href="">${arrWork[index].language[0]}</a></li>
                      <li><a href="">${arrWork[index].language[1]}</a></li>
                      <li><a href="">${arrWork[index].language[2]}</a></li>
                    </ul>

                    <div class="btn-see">
                      <button class="see" type="button">See live</button>
                      <button class="see" type="button">See Source</button>
                    </div>

                  </div>
                </div>
              </div>`;

  popup.innerHTML = popupDiv;

  if (popup.style.display === 'flex') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'flex';
    document.querySelector('.close-button').addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
}

const seeProjectBtn = document.querySelectorAll('#seeProject');
seeProjectBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    popupWindow(i);
  });
});