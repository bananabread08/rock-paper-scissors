function computerPlay() { //create a Computer AI that selects a random choice of a given set of choices
    const choices = ["fire", "water", "grass"];
    return(choices[Math.floor(Math.random() * choices.length)]);
}

function playRound(playerSelection) { // a round of the game and checks current scoring
    const computerSelection = computerPlay();
    const scoreContainer = document.querySelector("#result");
    const score = document.createElement("p");

    if (playerSelection === computerSelection){
        score.textContent = (`It's a tie. You both chose ${playerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`);
    }

    else if (
        ((playerSelection === "fire") && (computerSelection === "grass")) || 
        ((playerSelection === "water") && (computerSelection === "fire")) || 
        ((playerSelection === "grass") && (computerSelection === "water"))
        ){
        playerScore++;
        score.textContent = (`You win. ${playerSelection} beats ${computerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`); 
        }

    else {
        computerScore++;
        score.textContent = (`You lose. ${computerSelection} beats ${playerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`);
        } 
        scoreContainer.appendChild(score);
    }

let playerScore = 0;
let computerScore = 0;
const playerChoice = document.querySelectorAll("button"); 
playerChoice.forEach(button => {
        button.addEventListener("click", function(){
            playRound(button.id);
        }); //event for every button clicks
    });