const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    // Get a random number to use as a random index to select an option from the options list

    let randomIndex = Math.floor(Math.random() * 3);
    let randomChoice = options[randomIndex];
    return randomChoice
}

let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");
const buttonAudio = new Audio("./sounds/pop.mp3");

buttons.forEach((button) => {
    button.addEventListener('click', startGame);
})

function startGame(event) {
    if (document.getElementById("start")) {
        document.getElementById("start").remove();
    }

    document.querySelector(".container").removeAttribute("hidden");
    buttonAudio.play();
    
    let playerSelection = event.target.innerText;

        let computerSelection = getComputerChoice();
        let currentRound = playRound(playerSelection, computerSelection);

        updateScore(currentRound);
        displayImages(currentRound, playerSelection, computerSelection)

        document.getElementById("user-choice").textContent = `You Chose: ${playerSelection}`;
        document.getElementById("computer-choice").textContent = `Computer Chose: ${computerSelection}`;
        document.getElementById("user-score").textContent = `User Score: ${userScore}`;
        document.getElementById("computer-score").textContent = `${computerScore} :Computer Score`;

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
            button.remove();
        })
        if (userScore > computerScore) {
            document.getElementById("round").textContent = "You Won!! Hooray!!";
            document.getElementById("round").style = "font-size: 1.6rem";
            removePreviousImages()
            document.getElementById("final-image").setAttribute("src", "./images/win.png");
        } else if (userScore < computerScore) {
            document.getElementById("round").textContent = "You Lost... Sorry";
            document.getElementById("round").style = "font-size: 1.6rem";
            removePreviousImages()
            document.getElementById("final-image").setAttribute("src", "./images/lose.png");
        } else {
            document.getElementById("round").textContent = "It's a tie!";
            document.getElementById("round").style = "font-size: 1.6rem";
            removePreviousImages()
            document.getElementById("final-image").setAttribute("src", "./images/win.png");
        }
    }
}




function displayImages(round, userChoice, computerChoice) {

    if (computerChoice === "Rock") {
        document.getElementById("computer-image").setAttribute("src", "./images/pc-rock.png")

    } else if (computerChoice === "Paper") {
        document.getElementById("computer-image").setAttribute("src", "./images/pc-paper.png")

    } else {
        document.getElementById("computer-image").setAttribute("src", "./images/pc-scissors.png")

    }

    if (round === "win" || round === "tie") {
        if (userChoice === "Paper") {
            document.getElementById("player-image").setAttribute("src", "./images/paper-win.png")
        } else if (userChoice === "Rock") {
            document.getElementById("player-image").setAttribute("src", "./images/rock-win.png")
        } else {
            document.getElementById("player-image").setAttribute("src", "./images/scissors-win.png")
        }
    } else if (round === "lose") {
        if (userChoice === "Paper") {
            document.getElementById("player-image").setAttribute("src", "./images/paper-lose.png")
        } else if (userChoice === "Rock") {
            document.getElementById("player-image").setAttribute("src", "./images/rock-lose.png")
        } else {
            document.getElementById("player-image").setAttribute("src", "./images/scissors-lose.png")
        }
    }
}

function removePreviousImages() {
    document.getElementById("player-image").remove();
    document.getElementById("computer-image").remove();
}