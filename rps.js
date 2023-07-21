function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === 'Rock') {
        return "You win! Paper wraps rock."
    } if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors cut paper."
    } if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors."
    } if (playerSelection === "Rock" && computerSelection === 'Paper') {
        return "You lose! Paper wraps rock."
    } if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors cut paper."
    } if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You win! Rock beats scissors."
    } if (playerSelection.value === computerSelection.value) {
        return "It's a tie!"
    }
}

let playerSelection = "Paper";
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

// you win paper wraps rock > you lose rock is wrapped by paper
// you win scissors cut paper > you lose paper is cut by scissors
// you win scissors are crushed by rock > you lose scissors crushes scissors
// you

// paper dies to sc | you win or lose
// rock dies to paper
// scissor dies to rock