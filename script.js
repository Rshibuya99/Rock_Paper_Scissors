/*
program flow:

get human selection
get computer selection
evaluate winner
log point for winner
announce result
repeat for 5 times

functions:

[get human selection]
    - prompt input
    - case insensitive

[get computer selection]
    - random

[RPS logic]
    - evaluate the outcome from both selections
    - return one of three outcome
        - human win / tie / human lost

[score counter]
    - increment winner point by 1


[announce result]
    - print winner and latest score status

[play round]
    - does everything above
    - to be called 5 times

*/


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

// get human choice
function getHumanChoice() {
    let choice = prompt("Pick one (Rock/Paper/Scissors):").toUpperCase();
    return choice
}

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
    if (winner === "HUMAN") {
        humanScore += 1;
    } else if (winner === "COMPUTER") {
        computerScore += 1;
    }
}


// play round
function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let Capitalization = word => word.charAt(0) + word.slice(1).toLowerCase()

    outcome = logic(humanSelection, computerSelection);
    if (outcome === "TIE") {
        console.log(Capitalization(humanSelection) + " & " + Capitalization(computerSelection) + " is tie! " + "Current score for you is " + humanScore + " & computer is " + computerScore + ".")
    } else if (humanSelection === outcome) {
        scoreBoard("HUMAN")
        console.log("You won! " + Capitalization(humanSelection) + " beats " + Capitalization(computerSelection) + "! " +"Current score for you is " + humanScore + " & computer is " + computerScore + ".")
    } else {
        scoreBoard("COMPUTER")
        console.log("You lose! " + Capitalization(computerSelection) + " beats " + Capitalization(humanSelection) + "! " +"Current score for you is " + humanScore + " & computer is " + computerScore + ".")
    }
}


// play 5 rounds
for (let i = 0; i < 5; i++) {
    playRound()
}