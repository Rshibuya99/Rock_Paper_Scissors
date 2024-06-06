// score tracker
let humanScore = 0;
let computerScore = 0;

// logic for deciding winner of rock paper scissors
function logic(humanSelection, computerSelection) {
    let matchUp = humanSelection + computerSelection;
    if (humanSelection === computerSelection) {
        return "TIE"
    } else if (matchUp === "ROCKPAPER" || matchUp === "PAPERROCK") {
        return "PAPER"
    } else if (matchUp === "ROCKSCISSORS" || matchUp === "SCISSORSROCK") {
        return "ROCK"
    } else {
        return "SCISSORS"
    }
}


// activate round on button click
document.addEventListener('DOMContentLoaded',() => {
    let playButtons = document.querySelectorAll(".playBtn");
    for (let i = 0 ; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', function(e) {
            playRound(e.target.id);
        });
    };
});


// get computer choice
function getComputerChoice() {
    // returns 0, 1 or 2
    let randomPick = Math.floor(Math.random() * 3)
    if (randomPick === 0) {
        return "ROCK"
    } else if (randomPick === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}


// score counter
function scoreBoard(winner) {
    let scoreBoardHuman = document.querySelector('.scr-human');
    let scoreBoardComputer = document.querySelector('.scr-computer');

    if (winner === "HUMAN") {
        humanScore += 1;
        scoreBoardHuman.textContent = "YOU: " + humanScore
    } else if (winner === "COMPUTER") {
        computerScore += 1;
        scoreBoardComputer.textContent = "COMPUTER: " + computerScore   
    }
}

function announceWinner() {
    if (humanScore == 5 || computerScore == 5 ) {
        let winner = (humanScore == 5) ? 'You' : 'Computer';
        if(alert(`${winner} Won!`)) {}
        else window.location.reload(); 
    } else if (humanScore > 5 || computerScore > 5) {
        window.location.reload(); 
    }
}

function annonceRoundOutcome(humanSelection, computerSelection) {
    let announcer = document.querySelector(".result")
    roundOutcome = ''
    let Capitalization = word => word.charAt(0) + word.slice(1).toLowerCase()

    outcome = logic(humanSelection, computerSelection);
    if (outcome === "TIE") {
        roundOutcome = "Tie round! " + Capitalization(humanSelection) + " & " + Capitalization(computerSelection) + " is tie! "
    } else if (humanSelection === outcome) {
        roundOutcome = "You score! " + Capitalization(humanSelection) + " beats " + Capitalization(computerSelection) + "! "
        scoreBoard("HUMAN")
    } else {
        roundOutcome = "Computer score! " + Capitalization(computerSelection) + " beats " + Capitalization(humanSelection) + "! "
        scoreBoard("COMPUTER")
    }
    announcer.textContent = roundOutcome;
}

// play round
function playRound(humanChoice) {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    annonceRoundOutcome(humanSelection, computerSelection);
    announceWinner();
}
