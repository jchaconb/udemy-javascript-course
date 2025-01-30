'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const toggleModal = function (isOpen) {
  modal.classList.toggle('hidden', !isOpen);
  overlay.classList.toggle('hidden', !isOpen);
};

btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', () => toggleModal(true))
);

btnCloseModal.addEventListener('click', () => toggleModal(false));

overlay.addEventListener('click', () => toggleModal(false));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal(false);
  }
});
