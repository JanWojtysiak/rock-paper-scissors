function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
const getHumanChoice = () => prompt("Rock, paper, scissors?").toLowerCase();

function playGame(){
    let computerScore = 0, humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        }
        if (humanChoice === computerChoice) return alert("Draw!");
        else if (winsAgainst[humanChoice] === computerChoice) {
            humanScore += 1;
            return alert("You won!");
        } 
        else {
            computerScore +=1;
            return alert("Computer won!") 
        }
    }
    for (let i = 0; i <5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore > computerScore) {
    return alert("Congrats, you won the game!");
    } else if (computerScore > humanScore) {
        return alert("You lost the game :(");
    } else {
        return alert("It's a draw!");
    }
}
playGame();

