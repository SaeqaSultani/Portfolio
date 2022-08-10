const work = document.getElementById('work');

const arrWork = [
  {
    title: 'Tonic',
    exprience: {
      company: 'CANOPY',
      skill: 'Back End Dev',
      year: '2015',
    },
    image: 'images/Snapshoot-Portfolio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    language: ['html', 'css', 'javascript'],
  },
  {
    title: 'Multi-Post Stories',
    exprience: {
      company: 'CANOPY',
      skill: 'Back End Dev',
      year: '2015',
    },
    image: 'images/Snapshoot-Portfolio-1.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    language: ['html', 'css', 'javascript'],
  },
  {
    title: 'Tonic',
    exprience: {
      company: 'CANOPY',
      skill: 'Back End Dev',
      year: '2015',
    },
    image: 'images/Snapshoot-Portfolio-2.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    language: ['html', 'css', 'javascript'],

  },
  {
    title: 'Multi-Post Stories',
    image: './images/Snapshoot-Portfolio-3.svg',
    exprience: {
      company: 'CANOPY',
      skill: 'Back End Dev',
      year: '2015',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    language: ['html', 'css', 'javascript'],
  },
];

arrWork.forEach((element) => {
  const div = `<div class="sections">
            <div class="image">
                <img src="${element.image}" alt="image">
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