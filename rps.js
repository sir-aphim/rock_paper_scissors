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
        return "Triumph! The Star's brilliance enshrouds Death's dominion."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        aiScore++;
        return "Defeat! The Devil's cunning trumps the brilliance of The Star."
    } 
    if (playerSelection === "scissors" && computerSelection === "paper") {
        yourScore++;
        return 'Triumph! Deceit slices through the brilliance of The Star.'
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        aiScore++;
        return "Defeat! Death prevails, overshadowing the Devil's deceitful tricks."
    }
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        yourScore++;
        return "Triumph! Death's dominion shatters the Devil's schemes."
    } else if (playerSelection === "rock" && computerSelection === 'paper') {
        aiScore++;
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

const button = document.querySelector('button');
const body = document.querySelector('body')
const main = document.querySelector('.content')
const cards = document.querySelectorAll('.item')
const para = document.querySelector('p')
const message = document.querySelector('#message')

// cards selectors
const devilCard = document.querySelector("#the-devil")
const starCard = document.querySelector("#the-star")
const deathCard = document.querySelector("#death")

// function for text transition
function show () {
    if (para.className) {
    para.className = ''; // checks if name is empty
    }
    para.focus(); // use focus trick without setTimeOut
    para.className = 'fade-class';
}


// start button event listener
button.addEventListener("click", () => {
    const audio = document.querySelector('audio')
    audio.play()
    audio.loop = true;

    document.body.style.backgroundColor = 'black';
    body.classList.add('bgFade');

    button.classList.add("fade-out")

    para.textContent = 'The cosmic contest begins. Select your entity, then hover over cards for insights. Balance emerges as the quintessential mark, at a level of five.'

    // quit button
    const quitButton = document.createElement('button')
    quitButton.textContent = 'Quit Game'
    quitButton.classList.add('btn', 'btn-outline-light')
    quitButton.setAttribute('id', 'quit')

    main.appendChild(quitButton)

    // restart button
    const restartButton = document.createElement('button')
    restartButton.textContent = 'Return to Menu Screen'

    restartButton.classList.add('btn', 'btn-outline-light')
    restartButton.setAttribute('id', 'restart')
    restartButton.onclick = () => window.location.reload()


    // function

    show()

    quitButton.onclick = () => window.location.reload()

    // for each card, add the active class
    cards.forEach((card) => {
        card.classList.add('active')
    })

    // devil card
    devilCard.addEventListener("click", () => {
        playerSelection = 'scissors';
        para.innerHTML = game();

        show()

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);


        if (yourScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "grey";

            // element not working because it is inside the display none zone
            const defeat = document.createElement('h1')

            defeat.innerHTML = "You have been defeated. Balance is shattered, all is lost..."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(defeat)

            message.appendChild(restartButton)
        }
    })

    // star card
    starCard.addEventListener("click", () => {
        playerSelection = 'paper'
        para.textContent = game();
        
        show()

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);


        if (yourScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "grey";

            // element not working because it is inside the display none zone
            const defeat = document.createElement('h1')

            defeat.innerHTML = "You have been defeated. Balance is shattered, all is lost..."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(defeat)

            message.appendChild(restartButton)
        }
    })

    // death card
    deathCard.addEventListener('click', () => {
        playerSelection = 'rock'
        para.textContent = game();

        show()

        const score = document.createElement('p');
        score.innerHTML = `Score: (You: ${yourScore}, Enemy: ${aiScore})`
        para.appendChild(score);


        if (yourScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            main.style.display = "none";
            document.body.style.backgroundColor = "grey";

            // element not working because it is inside the display none zone
            const defeat = document.createElement('h1')

            defeat.innerHTML = "You have been defeated. Balance is shattered, all is lost..."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(defeat)

            message.appendChild(restartButton)
        }
    })

    
}, {once: true});

// highlight computer's choice when your card is chosen