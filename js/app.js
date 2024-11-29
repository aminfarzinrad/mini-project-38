'use strict';
// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
// starting project
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
// rolling dice
btnRoll.addEventListener('click', function () {
  // 1. generating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./image/dice-${dice}.png`;
  // 3. check for rolled 1 : 1 if true , switch to next player
  if (dice !== 1) {
    // add dice to currentscore
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
// btn hold
btnHold.addEventListener('click', function () {
  // 1. add currentScore to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. check if player's score is >= 100
  // finish the game
  
  // 3. switch player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
