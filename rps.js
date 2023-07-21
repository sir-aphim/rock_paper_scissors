let yourScore = 0;
let aiScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection === 'rock') {
        yourScore = yourScore + 1;
        aiScore = aiScore -1;
        return "You win! Paper wraps rock."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        yourScore = yourScore - 1;
        aiScore = aiScore + 1;
        return "You lose! Scissors cut paper."
    } 
    
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        yourScore = yourScore + 1
        aiScore = aiScore - 1;
        return "You win! Scissors cut paper."
    }  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        yourScore = yourScore - 1;
        aiScore = aiScore + 1;
        return "You lose! Rock beats scissors."
    }
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        yourScore = yourScore + 1
        aiScore = aiScore - 1;
        return "You win! Rock beats scissors."
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === 'paper') {
        yourScore = yourScore - 1;
        aiScore = aiScore + 1;
        return "You lose! Paper wraps rock."

    } if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie between ${playerSelection.toLowerCase()}s!`
    } else {
        return "You only have three options..."
    } 
}

// create a score function. maybe get score and show score?

function getScore () {
    if (yourScore < 0 || aiScore < 0) {
        yourScore = 0;
        aiScore = 0;
}
}

function showScore () {
    if (yourScore > aiScore) {
        return "You win!"
    } else {
        return "You lose!"
    }
}


let playerSelection = prompt("Quick! Rock, paper or scissors?")

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

const computerSelection = getComputerChoice();

let rounds = 5;

// now i need to set a function called game with a for loop that goes from round 1 to 5, and a while loop that keeps the questions going. if my score is bigger than the opponent, I win, and vice-versa. (see bellow for info, have to improve it someway...)

alert(playRound(playerSelection, computerSelection))




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