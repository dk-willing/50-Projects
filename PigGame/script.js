'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player__0');
const player1El = document.querySelector('.player__1');
const currScore0El = document.querySelector('#current--0');
const currScore1El = document.querySelector('#current--1');

const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('.overlay');

let scores, activePlayer, currScore, isPlaying;

const switchPlayer = function () {
  currScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('active__player');
  player1El.classList.toggle('active__player');
};

const showModal = function (num) {
  modal.classList.remove('hidden');
  document.querySelector('.player__number').textContent = num;
};

const init = function () {
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('active__player');
  player1El.classList.remove('active__player');
  player0El.classList.remove('win');
  player1El.classList.remove('win');
};

// Implementing the roll dice functionality
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // 1. Generate a random number from 1 - 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the correspoding dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // 3. We check if it is a 1 that was generated
    if (dice !== 1) {
      currScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    scores[activePlayer] += currScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector(`.player__${activePlayer}`).classList.add('win');

      const interval = setInterval(() => {
        showModal(activePlayer + 1);
      }, 400);

      setTimeout(() => {
        clearInterval(interval);
        modal.classList.add('hidden');
      }, 4000);

      diceEl.classList.add('hidden');
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
});

modalOverlay.addEventListener('click', function () {
  modal.classList.add('hidden');
});

btnNew.addEventListener('click', init);
init();
