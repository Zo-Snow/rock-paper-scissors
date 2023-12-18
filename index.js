const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    // Get a random number to use as a random index to select an option from the options list

    let randomIndex = Math.floor(Math.random() * 3);
    let randomChoice = options[randomIndex];
    return randomChoice
}

let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', startGame);
})

function startGame(event) {
    let playerSelection = event.target.value;
        let computerSelection = getComputerChoice();
        let currentRound = playRound(playerSelection, computerSelection);

        updateScore(currentRound);

        document.getElementById("user-choice").textContent = `You Chose: ${playerSelection}`;
        document.getElementById("computer-choice").textContent = `Computer Chose: ${computerSelection}`;
        document.getElementById("user-score").textContent = `User Score: ${userScore}`;
        document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;

        checkWinner(currentRound);
}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === "Paper" && computerSelection === "Paper" ||
    playerSelection === "Rock" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Scissors") {

        return "tie";

    } else if (playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {

        return "win";
        
    } else if (playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Rock" && computerSelection === "Paper" ||
    playerSelection === "Scissors" && computerSelection === "Rock") {

        return "lose";
        
    } 
}

function updateScore(round) {
    if (round === "tie") {
        userScore++;
        computerScore++;
        console.log("Tie!")
    } else if (round === "win") {
        userScore++;
        console.log("Win!")
    } else if (round === "lose") {
        computerScore++;
        console.log("Lose..")
    }
}

function checkWinner(round) {

    if (round === "tie") {
        document.getElementById("round").textContent = "This Round was a tie! Keepy going..";
    } else if (round === "win") {
        document.getElementById("round").textContent = "You win this round! yippee!! next one..";
    } else {
        document.getElementById("round").textContent = "Computer won this round, choose again!";
    }

    if (userScore === 5 || computerScore === 5) {
        buttons.forEach((button) => {
            button.removeEventListener('click', startGame);
            if (userScore > computerScore) {
                document.getElementById("round").textContent = "You Won!! Hooray!!";
            } else if (userScore < computerScore) {
                document.getElementById("round").textContent = "You Lost... Sorry";
            } else {
                document.getElementById("round").textContent = "It's a tie!";
            }
        })
    }
}