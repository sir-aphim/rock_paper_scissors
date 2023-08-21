let yourScore = 0;
let aiScore = 0;

// randomization of options
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)] ;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "paper" && computerSelection === 'rock') {
        yourScore++;

        if (aiScore > 0) {
            aiScore--;
        }
        return "Triumph! The Star's brilliance enshrouds Death's dominion."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        aiScore++;

        if (yourScore > 0) {
            yourScore--;
        }
        return "Defeat! The Devil's cunning trumps the brilliance of The Star."
    } 
    if (playerSelection === "scissors" && computerSelection === "paper") {
        yourScore++;

        if (aiScore > 0) {
            aiScore--;
        }
        return 'Triumph! Deceit slices through the brilliance of The Star.'
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        aiScore++;

        if (yourScore > 0) {
            yourScore--;
        }
        return "Defeat! Death prevails, overshadowing the Devil's deceitful tricks."
    }
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        yourScore++;

        if (aiScore > 0) {
            aiScore--;
        }
        return "Triumph! Death's dominion shatters the Devil's schemes."
    } else if (playerSelection === "rock" && computerSelection === 'paper') {
        aiScore = aiScore++;

        if (yourScore > 0) {
            yourScore--;
        }
        return "Defeat! The might of Death is dimmed by The Star's radiance."

    } if (playerSelection === computerSelection) {
        return 'Stalemate! Cosmic forces remain in equilibrium.'
    }
}

// 2.0
function game() {
            const computerSelection = getComputerChoice();
            return (playRound(playerSelection, computerSelection));
             // Removed the colon ":" at the end.
        }
  

// // turns out the fix for the 'undefined' error was just setting the 'else' to the getScore() function....

const button = document.querySelector('button');
const body = document.querySelector('body')
const main = document.querySelector('.vignette')
const cards = document.querySelectorAll('.item')
const para = document.querySelector('p')

// cards selectors
const devilCard = document.querySelector("#the-devil")
const starCard = document.querySelector("#the-star")
const deathCard = document.querySelector("#death")

// start button event listener
button.addEventListener("click", () => {
    const audio = document.querySelector('audio')
    audio.play()
    audio.loop = true;

    para.classList.add('bgFade')
    document.body.style.backgroundColor = 'black';
    body.classList.add('bgFade');
    button.classList.add("fadeOut")
    para.textContent = 'Game started. Choose your idol; hover over cards for specifics. Equilibrium is reached at a level of five.'

    // add button
    const quitButton = document.createElement('button')
    quitButton.textContent = 'Quit Game'
    quitButton.classList.add('btn', 'btn-outline-light')
    quitButton.setAttribute('id', 'quit')

    main.appendChild(quitButton)

    quitButton.onclick = () => window.location.reload()

    // for each card, add the active class
    cards.forEach((card) => {
        card.classList.add('active')
    })

    // devil card
    devilCard.addEventListener("click", () => {
        playerSelection = 'scissors';
        para.textContent = game();

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);
    })

    // star card
    starCard.addEventListener("click", () => {
        playerSelection = 'paper'
        para.textContent = game();

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);
    })

    // death card
    deathCard.addEventListener('click', () => {
        playerSelection = 'rock'
        para.textContent = game();

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);
    })

    
}, {once: true});

// fix start button; if clicked multiple times, the quit button will multiply


// let's add functionally, for now. find a way to relate each card, to each meaning;

// add background once hovered