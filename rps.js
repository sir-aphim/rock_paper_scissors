function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection === 'rock') {
        return "You win! Paper wraps rock."
    } if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cut paper."
    } if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors."
    } if (playerSelection.toLowerCase() === "rock" && computerSelection === 'paper') {
        return "You lose! Paper wraps rock."
    } if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cut paper."
    } if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie between ${playerSelection.toLowerCase()}s!`
    } else {
        return "You only have three options..."
    }
}

let playerSelection = "PAPER";
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

// you win paper wraps rock > you lose rock is wrapped by paper
// you win scissors cut paper > you lose paper is cut by scissors
// you win scissors are crushed by rock > you lose scissors crushes scissors
// you

// paper dies to sc | you win or lose
// rock dies to paper
// scissor dies to rock