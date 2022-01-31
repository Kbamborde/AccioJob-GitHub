const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

let previousGuesses = [];
let numGuesses = 0;

let randomNumber = Math.floor(Math.random()*100+1);
let maxGuesses = 10;

submit.addEventListener("click", function(e){
    e.preventDefault();
    
    const guess = parseInt(userInput.value);

    validateGuess(guess);
});


function validateGuess(guess){
    previousGuesses.push(guess);

    if(previousGuesses.length === maxGuesses) {
        displayGuesses(guess);
        displayMsg(`Game Over! Number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuesses(guess);
        checkGuess(guess);
    }
}

function displayGuesses(guess) {
    guessSlot.innerHTML += `${guess}`;
    userInput.value  = "";
    numGuesses++;

    let remainingGuesses = maxGuesses - numGuesses;

    if(remainingGuesses < 0){
        remainingGuesses = 0;
    }
    remaining.innerHTML = remainingGuesses;
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function checkGuess(guess){
    if(guess === randomNumber) {
        displayMsg("You guess correctly!");
        endGame();
    }
    else if(guess < randomNumber) {
        displayMsg("To low! Try a higher number");
    }
    else{
        displayMsg("To high! Try a lower number");
    }
}

const pEL = document.createElement("p");
function endGame() {
    userInput.value = "";
    pEL.classList.add("button");
    pEL.style.cursor = "pointer";
    pEL.innerHTML = `<h1 onclick = "newGame()" id="newGame">Start New game</h1>`;

    startOver.append(pEL);
    userInput.disabled = 'true';
    submit.disabled = 'true';
}

function newGame(){
    location.reload();
}