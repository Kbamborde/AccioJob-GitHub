const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const playerSelect = document.getElementById("playerSelect");
const compSelect = document.getElementById("computerSelect");

const message = document.getElementById("message");
const submit = document.getElementById("submit");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;
let gameActive = false;
function displayBoards() {
    const start = document.getElementById("start");
    const boards = document.getElementById("boards");
    const select = document.getElementById("select");

    start.style.display = "none";

    boards.style.display = "block";
    select.style.display = "block";

    gameActive = true;
}

function gameFlow(playerSelection) {
    const winnerObject = getMeWinner(playerSelection);

    const result = winnerObject.winner

    const { compMove:computerMove } = winnerObject
    displaySelection('player', playerSelection, result);
    displaySelection('computer', computerMove, result);

    scoreBoard(result);
    message.innerText = result;
    whoWon();
}

function displaySelection(whoIsPlaying, selection, result) {
    if (whoIsPlaying === 'player') {
        playerSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`

        if (result === "Player won!") {
            playerSelect.style.color = 'green';
            compSelect.style.color = 'red'
        }
    }
    else {
        compSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`

        if (result === 'Computer won!') {
            playerSelect.style.color = 'red';
            compSelect.style.color = 'green';
        }
    }

    if (result === "Draw!") {
        compSelect.style.color = "yellow";
        playerSelect.style.color = "yellow"
    }
}

function scoreBoard(result) {
    if (result === "Player won!") {
        playerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    }
    else if (result === "Computer won!") {
        computerScore++;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    }
    else {
        return false;
    }
    console.log(playerScore);
}

function gameFinished() {
    if (playerScore === 5 || computerScore === 5) {
        return true
    }
    return false;
}

function whoWon() {
    if (gameFinished()) {
        if (playerScore === 5) {
            message.innerText = `Player in the winnner! Congratulations!`
        }
        else {
            message.innerText = `Computer is the Winner! You Lose!`
        }
        reset()
    }
}

function reset() {
    setTimeout(function () {

        playerScore = 0;
        computerScore = 0;
        compSelect.innerHTML = ``
        playerSelect.innerHTML = ``
        pScore.innerText = 0;
        cScore.innerText = 0;
        gameActive = false;
        message.innerText - `Choose rock, paper, scissors to play again`
    }, 3000)
}

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}


function playRound(ps, cs) {
    if (ps === cs) {
        return 0
    }
    else if (ps == 'rock' && cs == 'scissors') {
        return 1
    }
    else if (ps == 'rock' && cs == 'paper') {
        return -1
    }
    else if (ps == "paper" && cs == 'scissors') {
        return -1
    }
    else if (ps == 'paper' && cs == 'rock') {
        return 1
    }
    else if (ps == 'scissors' && cs === 'rock') {
        return -1
    }
    else if (ps == 'scissors' && cs == 'paper') {
        return 1
    }
}


function getMeWinner(playerSelection) {
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    winner = winner === 0 ? "Draw!" : (winner === 1 ? "Player won!" : "Computer won!");
    return ({
        winner: winner,
        compMove: computerSelection
    })
}

submit.addEventListener("click", displayBoards);

rock.addEventListener("click", () => gameFlow(rock.id));
paper.addEventListener("click", () => gameFlow(paper.id));
scissors.addEventListener("click", () => gameFlow(scissors.id));
