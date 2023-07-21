function playRound (playerSelection, computerSelection) {
}


function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}