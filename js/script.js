
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    diceImg.classList.add('hidden');
}

const resetGame = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    diceImg.classList.add('hidden');    
}

btnRoll.addEventListener('click' , () => {
    const diceEl = Math.trunc(Math.random() * 6 ) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `./assets/dice-${diceEl}.png`;

    if (diceEl !== 1) {
        currentScore += diceEl;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
})

btnHold.addEventListener('click', () => {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent = currentScore;

    switchPlayer();

})

btnNew.addEventListener('click' , () => {
    resetGame();
})


