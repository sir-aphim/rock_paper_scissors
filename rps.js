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
        return "Triumph! Death's dominion overshadows the brilliance of The Star."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        aiScore++;
        return "Defeat! Even the dominion of Death is tricked by the Devil's cunning."
    } 

    if (playerSelection === "scissors" && computerSelection === "paper") {
        yourScore++;
        return "Triumph! The Devil's shrewdness conquers, outwitting even the might of Death."
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        aiScore++;
        return "Defeat! The Devil is overwhelmed by the Star's light."
    }
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        yourScore++;
        return "Triumph! The brilliance of The Star shatters the Devil's schemes."
    } else if (playerSelection === "rock" && computerSelection === 'paper') {
        aiScore++;
        return "Defeat! The Star is dimmed by the inevitable fatality of Death."
    } if (playerSelection === computerSelection) {
        return 'Stalemate! Cosmic forces remain in equilibrium.'
    }
}

const computerSelection = getComputerChoice();

// 2.0
function game() {
            return (playRound(playerSelection, computerSelection));
             // Removed the colon ":" at the end.
        }

const button = document.querySelector('button');
const body = document.querySelector('body')
const main = document.querySelector('.content')
const header = document.querySelector('header')
const cards = document.querySelectorAll('.item')
const para = document.querySelector('p')
const message = document.querySelector('#message')

// cards selectors
const devilCard = document.querySelector("#the-devil")
const starCard = document.querySelector("#the-star")
const deathCard = document.querySelector("#death")

// function for text transition
function textTransition () {
    if (para.className) {
    para.className = ''; // checks if name is empty
    }
    para.focus(); // use focus trick without setTimeOut
    para.className = 'fade-class';
}

function clickFeedback () {
    let click = document.querySelector('.click') // play button click noise
    if(!click) return;
    click.currentTime = 0;
    click.play()
}

function startClick () {
    let click = document.querySelector('.start')
    click.play()
}


// start button event listener
button.addEventListener("click", () => {
    startClick()
    const battleTheme = document.querySelector('.battle')
    battleTheme.play()
    battleTheme.volume = 0.07;

    document.body.style.backgroundColor = 'black';
    body.classList.add('bgFade');

    button.classList.add("fade-out")

    para.textContent = 'The cosmic contest begins. Select your entity, then hover over cards for insights. Balance emerges as the quintessential mark, at a level of five.'

    // quit button
    const quitButton = document.createElement('button')
    quitButton.textContent = 'Quit Game'
    quitButton.classList.add('btn', 'btn-outline-light')
    quitButton.setAttribute('id', 'quit')

    clickFeedback()

    main.appendChild(quitButton)

    // function for button animation being pushed down by card
    function slideButtonOnHover () {
        deathCard.addEventListener("mouseover", () => {
            quitButton.classList.remove('button-up')
            quitButton.classList.add('button-down')
        })
    
        deathCard.addEventListener("mouseout", () => {
            quitButton.classList.remove('button-down')
            quitButton.classList.add('button-up')
        })
    }

    // restart button
    const restartButton = document.createElement('button')
    restartButton.textContent = 'Return to Menu Screen'

    restartButton.classList.add('btn', 'btn-outline-light')
    restartButton.setAttribute('id', 'restart')
    restartButton.onclick = () => window.location.reload()

    textTransition()
    slideButtonOnHover()

    quitButton.onclick = () => window.location.reload()

    // for each card, add the active class
    cards.forEach((card) => {
        card.classList.add('active')
    })

  
  
  const score = document.createElement('p');

    // devil card
    devilCard.addEventListener("click", () => {
        clickFeedback();
        button.remove()
        playerSelection = 'scissors';
        para.innerHTML = game();

        textTransition()

        score.innerHTML = `${yourScore} / ${aiScore}`
        score.classList.add('score-style')
        header.appendChild(score);


        if (yourScore === 5) {
            battleTheme.pause()
            const victoryTheme = document.querySelector('.victory')
            victoryTheme.play()
            victoryTheme.volume = 0.07;

            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            battleTheme.pause()
            const defeatTheme = document.querySelector('.defeat')
            defeatTheme.play()
            defeatTheme.volume = 0.15;
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
        clickFeedback()
        button.remove()
        playerSelection = 'rock'
        para.textContent = game();
        
        textTransition()

        score.innerHTML = `${yourScore} / ${aiScore}`
        score.classList.add('score-style')
        header.appendChild(score);


        if (yourScore === 5) {
            battleTheme.pause()
            const victoryTheme = document.querySelector('.victory')
            victoryTheme.play()
            victoryTheme.volume = 0.07;

            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            battleTheme.pause()
            const defeatTheme = document.querySelector('.defeat')
            defeatTheme.play()
            defeatTheme.volume = 0.15;

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
        clickFeedback();
        button.remove()
        playerSelection = 'paper'
        para.textContent = game();

        score.innerHTML = `${yourScore} / ${aiScore}`
        score.classList.add('score-style')
        header.appendChild(score);

        textTransition()
   

        if (yourScore === 5) {
            battleTheme.pause()
            const victoryTheme = document.querySelector('.victory')
            victoryTheme.play()
            victoryTheme.volume = 0.07;

            main.style.display = "none";
            document.body.style.backgroundColor = "#910c10";
            
            const victory = document.createElement('h1')
            
            victory.innerHTML = "You have won! Balance restored."
            message.classList.add('msg-transition')
            message.classList.add('fade-class')
            message.appendChild(victory)

            message.appendChild(restartButton)
        } else if (aiScore === 5) {
            battleTheme.pause()
            const defeatTheme = document.querySelector('.defeat')
            defeatTheme.play()
            defeatTheme.volume = 0.15;

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