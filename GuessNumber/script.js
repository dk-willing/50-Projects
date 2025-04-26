'use strict';

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const secretDigit = document.querySelector('.secretDigit');
const playAgain = document.querySelector('.again');
const input = document.querySelector('.guess');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(input.value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Guess!');
    secretDigit.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#64b748';
    document.querySelector('.secretDigit').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      highScoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('😢 You Lost');
    }
  }
});

playAgain.addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  input.value = '';
  scoreEl.textContent = score;
  secretDigit.textContent = '?';
  displayMessage('Start Guessing...');
  document.querySelector('.secretDigit').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
