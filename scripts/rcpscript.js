function computerPlay() { //create a Computer AI that selects a random choice of a given set of choices
    const choices = ["fire", "water", "grass"];
    return(choices[Math.floor(Math.random() * choices.length)]);
}

function isGameOver(fScore, cont){
    if (playerScore === 5){
        cont.appendChild(fsCore);
        return fScore.textContent = ("Game Over. You win!");
    }

    else if (computerScore === 5){
        cont.appendChild(fScore);
        return fScore.textContent = ("Game Over. Computer wins!");
    }
}

function playRound(playerSelection) { // a round of the game and checks current scoring
    const computerSelection = computerPlay();
    const scoreCont = document.querySelector("#result");
    const finalScore = document.createElement("p")

    if (playerSelection === computerSelection){
        scoreCont.textContent = (`It's a tie. You both chose ${playerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`);
    }

    else if (
        ((playerSelection === "fire") && (computerSelection === "grass")) || 
        ((playerSelection === "water") && (computerSelection === "fire")) || 
        ((playerSelection === "grass") && (computerSelection === "water"))
        ){
        playerScore++;
        scoreCont.textContent = (`You win. ${playerSelection} beats ${computerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`); 
        isGameOver(finalScore, scoreCont);
        }

    else {
        computerScore++;
        scoreCont.textContent = (`You lose. ${computerSelection} beats ${playerSelection}. 
        Player score: ${playerScore} Computer score: ${computerScore}`);
        isGameOver(finalScore, scoreCont);
        } 
    }

let playerScore = 0;
let computerScore = 0;
const playerChoice = document.querySelectorAll("button"); 
playerChoice.forEach(button => {
        button.addEventListener("click", function(){
            playRound(button.id);
        }); //event for every button clicks
    });