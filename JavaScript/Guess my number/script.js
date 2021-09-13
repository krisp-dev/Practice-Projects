'use strict';

/* ==================
      GAME LOGIC
===================== */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const body = document.querySelector('body');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

check.addEventListener('click', function () {
  const userGuess = Number(guess.value);

  // Check if user has input a number
  if (!userGuess) {
    displayMessage('⛔ No number!');
  }
  // Check if guess is equal to secret number & player wins
  else if (userGuess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // Set highscore to the current score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Check if guess is wrong & player loses
  else if (userGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(userGuess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💣 You lost!');
      displayScore(0);
      body.style.backgroundColor = '#fc3737';
    }
  }
});

// Reset values & styles once the 'Again!' button is clicked
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  number.textContent = '?';
  guess.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

/* ==================
      MODAL WINDOW
===================== */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

// Remove hidden classes
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Add hidden classes
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event listeners for button, X and overlay(click outside modal)
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal using Esc/Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
