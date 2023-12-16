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
        console.log("It's a tie!")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win!")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose....")
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a tie!")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win!")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose....")
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("It's a tie!")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win!")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose....")
    } else {
        console.log("Sorry, an error occured. Perhaps a typo? Try Again.");
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

playRound(getPlayerChoice(), getComputerChoice());

// Step 5 - Make a function which is called game to play the round 5 times keeping score and revealing a winner
