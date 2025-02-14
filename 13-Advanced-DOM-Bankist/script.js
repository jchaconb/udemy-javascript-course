'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
console.log('----- Selecting, Creating, and Deleting Elements -----');
const header = document.querySelector('.header');

console.log(header);
console.log(document.querySelectorAll('.section'));
console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Gor it!</button>';

header.append(message);
// header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

console.log('----- Styles, Attributes and Classes -----');
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 49px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // .../13-Advanced-DOM-Bankist/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

logo.alt = 'Beautiful minimalist logo'; //

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // .../13-Advanced-DOM-Bankist/index.html#

logo.classList.add('a', 'f');
logo.classList.remove('b');
logo.classList.toggle('c');
logo.classList.contains('d');

console.log('----- Types of Events Handlers -----');
const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener');

  h1.removeEventListener('mouseenter', alertH1);
};

// h1.onmouseenter = function (e) {
//   alert('addEventListener');
// };

h1.addEventListener('mouseenter', alertH1);
*/

console.log('----- Event Propagation in Practice -----');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
