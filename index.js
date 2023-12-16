// Step 1 - Make a function which deals with computer selection of rock paper scissors

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    // Get a random number to use as a random index to select an option from the options list

    let randomIndex = Math.floor(Math.random() * 3);
    let randomChoice = options[randomIndex];
    return randomChoice
}

// Step 2 - Make a function which takes in the user choice 

function getPlayerChoice() {
    let userInput = prompt("Choose one: Rock, Paper, Scissors.");
    let userChoice = makeTitleCase(userInput);
    return userChoice
}

// Step 3 - Make a function which converts words to title case to match the options list words

function makeTitleCase(word) {
    // Converting word to lower and trimming out the whitespaces
    let toLower = word.toLowerCase().trim();
    // Converting the first letter to UpperCase and joining it with the rest of the word
    word = toLower.slice(0, 1).toUpperCase() + toLower.slice(1, toLower.length);
    return word
}

// Step 4 - Make a function which takes in the computer and user choice to play a round of the game 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "tie"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "win"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "lose"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "tie"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "win"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "lose"
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "tie"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "win"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "lose"
    } else {
        console.log("Sowwy.. typo? Computer should've gotten the score but i'll spare you.. No score for both..");
    }
}

// Step 5 - Make a function which is called game to play the round 5 times keeping score and revealing a winner

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Modified playRound function to return an output instead of console logging 

        let round = playRound(getPlayerChoice(), getComputerChoice());

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
    console.log("User: "+ userScore + " Computer: " +computerScore);
    if (userScore > computerScore) {
        console.log("You Win!! Yayyyy")
    } else if (userScore === computerScore) {
        console.log("It's a tie! hehe.. yay?")
    } else {
        console.log("Sorry... You lost.. Computer WON HEHE..")
    }
}

game();
