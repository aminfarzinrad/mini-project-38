'use strict';
// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
// starting project
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// rolling dice
btnRoll.addEventListener('click', function () {
  // 1. generating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./image/dice-${dice}.png`;
  // 3. check for rolled 1 : 1 if true , switch to next player
});
