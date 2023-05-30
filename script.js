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

function playRound(playerSelection, computerSelection) {
    let cleanedPlayerSelection = playerSelection.toLowerCase();

    const loseText = "You Lose! " + computerSelection + " beats " + cleanedPlayerSelection;
    const winText = "You Win! " + cleanedPlayerSelection + " beats " + computerSelection;
    if(cleanedPlayerSelection === computerSelection) {
        console.log("Its a draw! Try again.");
        return 0;
    }

    if(cleanedPlayerSelection === "rock"){
        if(computerSelection === "paper") {
            console.log(loseText);
            return -1;
        } else {
            console.log(winText);
            return 1;
        }
    } else if (cleanedPlayerSelection === "paper") {
        if(computerSelection === "scissors") {
            console.log(loseText);
            return -1;
        } else {
            console.log(winText);
            return 1;
        }
    } else if (cleanedPlayerSelection === "scissors") {
        if(computerSelection === "rock") {
            console.log(loseText);
            return -1;
        } else {
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

