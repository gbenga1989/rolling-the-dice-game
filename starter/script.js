'use strict';

// selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function(){
  //1.generate a random dce roll
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

  //2.display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //3.check for rolled 1:if true, switch player
  if(dice !== 1){
// Add the dice to the current score
currentScore += dice;
current0EL.textContent = currentScore; //CHANGE LATER

  } else{
    // switch to the next player
  }
})