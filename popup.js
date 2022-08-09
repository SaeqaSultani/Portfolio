const openPopup = document.querySelector('.model');
const closePopup = document.querySelector('.close-button');
const seeProject = document.querySelectorAll('.seeProject');
const overlay = document.querySelector('#overlay');

const popup = [
  {
    title: 'Tonic',
    discription: 'Amazing project using react, HTML, CSS and Ruby on Rails',
    imageLink: 'Images&Icons/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Canopy',
    year: '2019',
    sourceLink: 'https://github.com/MohamedCK',
    demoLink: '',
  },
  {
    title: 'Multi-post Stories',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/work2.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Facebook',
    year: '2020',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Tonic',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/work3.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Google',
    year: '2021',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Multi-post Stories',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/work4.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Adobe',
    year: '2022',
    sourceLink: '',
    demoLink: '',
  },
];

function showModal(work) {
  const projectDetails = popup[work];
  document.querySelector('.tonic').innerHTML = projectDetails.title;
  document.querySelector('.descriptionist').innerHTML = projectDetails.discription;
  document.querySelector('.work-banners-model').src = projectDetails.imageLink;
  document.querySelector('.canopy-model').innerHTML = projectDetails.company;
  document.querySelector('.year-model').innerHTML = projectDetails.year;
  document.querySelector('.dogWater').href = projectDetails.sourceLink;
  document.querySelector('.catWater').href = projectDetails.demoLink;
}

seeProject.forEach((element) => {
  element.addEventListener('click', (event) => {
    showModal(event.target.dataset.work);
    openPopup.style.display = 'block';
    overlay.style.display = 'block';
  }, false);
});

closePopup.addEventListener('click', () => {
  openPopup.style.display = 'none';
  overlay.style.display = 'none';
});