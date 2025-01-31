'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const changeTurn = () => {
  resetActivePlayerScore();
  toggleActivePlayerIndicator();
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const resetActivePlayerScore = () => {
  currentScore = 0;
  setCurrentScoreForPlayer(activePlayer, 0);
};

const setCurrentScoreForPlayer = (player, score) => {
  document.getElementById(`current--${player}`).textContent = score;
};

const setTotalScoreForPlayer = (player, score) => {
  document.getElementById(`score--${player}`).textContent = score;
};

const toggleActivePlayerIndicator = () => {
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

const generateRandomDiceValue = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = number => {
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${number}.png`;
};

const saveActivePlayerScore = () => {
  scores[activePlayer] += currentScore;
  setTotalScoreForPlayer(activePlayer, scores[activePlayer]);
};

const disableGame = () => {
  playing = false;
};

const hideDice = () => {
  diceElement.classList.add('hidden');
};

const markPlayerAsWinner = () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
};

btnRoll.addEventListener('click', function () {
  if (!playing) return;

  const dice = generateRandomDiceValue();
  displayDice(dice);

  if (dice !== 1) {
    currentScore += dice;
    setCurrentScoreForPlayer(activePlayer, currentScore);
  } else {
    changeTurn();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;

  saveActivePlayerScore();

  if (scores[activePlayer] >= 100) {
    markPlayerAsWinner();
    hideDice();
    disableGame();
  } else {
    changeTurn();
  }
});

btnNew.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  hideDice();
});
