let computerScore = 0, humanScore = 0;
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(computerChoice, humanChoice) {
        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        }
        if (humanChoice === computerChoice) return alert("Draw!");
        else if (winsAgainst[humanChoice] === computerChoice) {
            humanScore += 1;
            alert("You won!");
        } 
        else {
            computerScore +=1;
            alert("Computer won!") 
        }

    }

function checkGameOver() {
        if (humanScore > computerScore) {
            alert("Congrats, you won the game!");
        } else if (computerScore > humanScore) {
            alert("You lost the game :(");
        } else {
            alert("It's a draw!");
        }
        
        humanScore = 0;
        computerScore = 0;
    }    
     
const menu = document.querySelector("#menu");
menu.addEventListener('click', (event) => {
    const target = event.target;
    const humanChoice = target.id;
    playRound(getComputerChoice(), humanChoice);
    if (computerScore === 5|| humanScore === 5) checkGameOver();
})