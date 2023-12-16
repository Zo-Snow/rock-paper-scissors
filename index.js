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

// Step 5 - Make a function which is called game to play the round 5 times keeping score and revealing a winner










