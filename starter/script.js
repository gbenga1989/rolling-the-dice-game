'use strict';

// selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; 
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}

//rolling dice functionality
btnRoll.addEventListener('click', function(){
  if (playing) {
  //1.generate a random dce roll
const dice = Math.trunc(Math.random() * 6) + 1;


  //2.display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //3.check for rolled 1:if true, switch player
  if(dice !== 1){
// Add the dice to the current score
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else{
    // switch to the next player
   switchPlayer();
  }
}
})

btnHold.addEventListener('click', function(){
  if(playing){

  
  //1. Add current score to the active player score
  scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  //2. check if the players score is >=100
  if (scores(activePlayer) >= 20){
      //finish the game
      playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

  } else{
    //3. switch to the next player
  switchPlayer();
  }
}
})