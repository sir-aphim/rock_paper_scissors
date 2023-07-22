let yourScore = 0;
let aiScore = 0;

function limitScore () {
    if (yourScore < 0) {
        yourScore = 0;
    } else if (aiScore < 0) {
        aiScore = 0;
    }
}

let playerSelection = prompt("Rock, paper, or scissors? Press enter to begin!")

function getScore () {
    if (aiScore > yourScore) {
        return "You lost."
    } else if (yourScore > aiScore) {
        return "You won!"
    } else {
        return "It's a tie!"
    }
}

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "paper" && computerSelection === 'rock') {
        yourScore = yourScore++;
        aiScore = aiScore--;
        return 'You win! Paper wraps rock'
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        yourScore = yourScore--;
        aiScore = aiScore++;
        return 'You lose! Scissors cut paper'
    } 
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        yourScore = yourScore--;
        aiScore = aiScore++;
        return 'You win! Scissors cut paper'
    }  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        yourScore = yourScore--;
        aiScore = aiScore++;
        return 'You lose! Rock beats scissors'
    }
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        yourScore = yourScore++;
        aiScore = aiScore--;
        return 'You win! Rock beats scissors'

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === 'paper') {
        yourScore = yourScore--;
        aiScore = aiScore++;
        return 'You lose! Paper wraps rock'

    } if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie between ${playerSelection.toLowerCase()}s!`
    } else {
        your
        return `Hey! You can only use one of the options!`
    }
}



// create a score function. maybe get score and show score?



// now i need to set a function called game with a for loop that goes from round 1 to 5, and a while loop that keeps the questions going. if my score is bigger than the opponent, I win, and vice-versa. (see bellow for info, have to improve it someway...)


function game() {
    for (let i = 0; i < 5; i++) {
        limitScore();
        playerSelection = prompt(`Quick! The score is ${yourScore} to ${aiScore}.`);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); // Removed the colon ":" at the end.
    }
    return getScore();
}

// turns out the fix for the 'undefined' error was just setting the 'else' to the getScore() function....

alert(game())
