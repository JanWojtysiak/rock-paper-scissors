const humanSpan = document.querySelector("#human-score");
const computerSpan = document.querySelector("#computer-score");
const score = document.querySelector("#score");
const resetBtn = document.querySelector("#reset-btn");
const menu = document.querySelector("#menu");

let computerScore = 0;
let humanScore = 0;
let gameOver = false;
const MAX_SCORE = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
const updateScores = () => {
    humanSpan.textContent = ` ${humanScore}`;
    computerSpan.textContent = ` ${computerScore}`;
}
function playRound(computerChoice, humanChoice) {
        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        }
        if (humanChoice === computerChoice) {
            score.textContent = "Draw";
        }
        else if (winsAgainst[humanChoice] === computerChoice) {
            humanScore += 1;
            score.textContent = "You win!";
        } 
        else {
            computerScore +=1;
            score.textContent = "You lose!";
        }
        updateScores();
    }
function checkGameOver() {
        if (humanScore > computerScore) {
            score.textContent = "You won the whole game!";
        } else if (computerScore > humanScore) {
            score.textContent = "You lost the entire game :(";
        } else {
            score.textContent = "You draw the whole game!";
        }
        resetBtn.style.display = "inline-block";
        gameOver = true;
    }    

menu.addEventListener('click', (event) => {
    if (gameOver) return;
    
    const target = event.target;
    const humanChoice = target.id;
    playRound(getComputerChoice(), humanChoice);
    
    if (computerScore >= MAX_SCORE || humanScore >= MAX_SCORE) {
        checkGameOver();
    }
});

resetBtn.addEventListener('click', () => {
    gameOver = false;
    computerScore = 0;
    humanScore = 0;
    updateScores();
    score.textContent = "";
    resetBtn.style.display = "none";
})