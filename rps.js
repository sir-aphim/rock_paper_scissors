let score = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection === 'rock') {
        score = score + 1;
        return "You win! Paper wraps rock."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        score = score - 1
        return "You lose! Scissors cut paper."
    } 
    
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        score = score + 1
        return "You win! Scissors cut paper."
    }  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        score = score - 1
        return "You lose! Rock beats scissors."
    }
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        score = score + 1
        return "You win! Rock beats scissors."
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === 'paper') {
        score = score - 1
        return "You lose! Paper wraps rock."

    } if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie between ${playerSelection.toLowerCase()}s!`
    } else {
        return "You only have three options..."
    } 
}

let playerSelection = prompt("Quick! Rock, paper or scissors?")

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

const computerSelection = getComputerChoice();

let rounds = 5;

alert(playRound(playerSelection, computerSelection))

alert("Your score is " + score)



// function game () {
//     for (i = 1; i < rounds; i++) {
//         while (i < rounds) {
//             alert(playRound(playerSelection, computerSelection))
//             playerSelection = prompt("Once again! Your current score is " + score);
//             break;
//         } 
//     }
// }



// you win paper wraps rock > you lose rock is wrapped by paper
// you win scissors cut paper > you lose paper is cut by scissors
// you win scissors are crushed by rock > you lose scissors crushes scissors
// you

// paper dies to sc | you win or lose
// rock dies to paper
// scissor dies to rock