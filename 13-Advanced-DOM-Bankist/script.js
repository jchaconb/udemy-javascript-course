'use strict';

console.log('Initializing Modal Window Functionality');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = () => {
  console.log('Opening modal');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  console.log('Closing modal');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Escape key pressed, closing modal');
    closeModal();
  }
});

console.log('Initializing Smooth Scrolling');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', () => {
  console.log('Scrolling to section 1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

console.log('Initializing Navigation Scrolling');

document.querySelector('.nav__links').addEventListener('click', e => {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href');
    console.log(`Navigating to ${sectionId}`);
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
});

console.log('Initializing Tabbed Component');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) {
    console.log('No tab clicked');
    return;
  }

  console.log(`Tab clicked: ${clicked.dataset.tab}`);

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

console.log('Initializing Menu Fade Animation');

const nav = document.querySelector('.nav');

const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    console.log(`Hovering over: ${e.target.textContent}`);
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handlerHover.bind(0.5));
nav.addEventListener('mouseout', handlerHover.bind(1));

console.log('Sticky Navigation: Intersection Observer API');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
