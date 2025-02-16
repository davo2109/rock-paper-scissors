function getComputerChoice(){
    let random = Math.floor(Math.random() * 100000);
    let choice = random % 3;

    if(choice === 0){
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    } else {
        return "well";
    }
}

rockButton.addEventListener("click", function(e){
    playRound("rock");
});
paperButton.addEventListener("click", function(e){
    playRound("paper");
});
scissorsButton.addEventListener("click", function(e){
    playRound("scissors");
});

function playerOneWin() {
    const playerScore = document.querySelector("#playerOneScore");
    playerScore.textContent = Number(playerScore.textContent) + 1;
    checkForTotalWin(Number(playerScore.textContent), "Player");
}

function playerTwoWin() {
    const playerScore = document.querySelector("#playerTwoScore");
    playerScore.textContent = Number(playerScore.textContent) + 1;
    checkForTotalWin(Number(playerScore.textContent), "Computer");
}

function checkForTotalWin(score, player) {
    if(score >= 5) {
        const resultText = document.querySelector("#resultText");
        resultText.textContent = player + " has won!";
    }

}

function showPlayerChoices(playerOneChoice, playerTwoChoice) {
    const playerAction = document.querySelector("#playerOneChoice");
    playerAction.textContent = playerOneChoice;
    const computerAction = document.querySelector("#playerTwoChoice");
    computerAction.textContent = playerTwoChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let cleanedPlayerSelection = playerSelection.toLowerCase();
    showPlayerChoices(cleanedPlayerSelection, computerSelection);
    const loseText = "You Lose! " + computerSelection + " beats " + cleanedPlayerSelection;
    const winText = "You Win! " + cleanedPlayerSelection + " beats " + computerSelection;
    if(cleanedPlayerSelection === computerSelection) {
        console.log("Its a draw! Try again.");
        return 0;
    }

    if(cleanedPlayerSelection === "rock"){
        if(computerSelection === "paper") {
            playerTwoWin();
            console.log(loseText);
            return -1;
        } else {
            playerOneWin();
            console.log(winText);
            return 1;
        }
    } else if (cleanedPlayerSelection === "paper") {
        if(computerSelection === "scissors") {
            playerTwoWin();
            console.log(loseText);
            return -1;
        } else {
            playerOneWin();
            console.log(winText);
            return 1;
        }
    } else if (cleanedPlayerSelection === "scissors") {
        if(computerSelection === "rock") {
            playerTwoWin();
            console.log(loseText);
            return -1;
        } else {
            playerOneWin();
            console.log(winText);
            return 1;
        }
    } else {
        console.log("Invalid choice. You Lose!");
        return -1;
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; ++i) {
        let playerChoice = prompt("Make your choice");
        score += playRound(playerChoice, getComputerChoice());
    }
    if(score > 0) {
        console.log("You win the game!");
    } else if(score < 0) {
        console.log("You lose the game!");
    } else {
        console.log("Draw!");
    }
}

