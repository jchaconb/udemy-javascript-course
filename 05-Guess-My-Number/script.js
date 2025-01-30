'use strict';

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const bodyElement = document.body;
const guessInput = document.querySelector('.guess');
const highscoreElement = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = message => (messageElement.textContent = message);
const displayScore = score => (scoreElement.textContent = score);

const applyWinnerStyles = secretNumber => {
  numberElement.textContent = secretNumber;
  bodyElement.style.backgroundColor = '#60b347';
  numberElement.style.width = '30rem';
};

const resetGame = function () {
  secretNumber = generateSecretNumber();
  score = 20;

  displayMessage('Start guessing...');
  displayScore(score);

  guessInput.value = '';
  numberElement.textContent = '?';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
};

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    return displayMessage('⛔️ No number!');
  }

  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    applyWinnerStyles(secretNumber);
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
});

againButton.addEventListener('click', function () {
  resetGame();
});
