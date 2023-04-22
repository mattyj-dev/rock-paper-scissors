//define some variables
const choices = ["rock", "paper", "scissors"]

function game() {
    //play the game
    playRound();

    //play five rounds
    //console based
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    //get input from player
    let input = prompt('Type: Rock, Paper, or Scissors');
    while(input == null) {
        input = prompt('Type: Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false) {
        prompt('Type: Rock, Paper, or Scissors -- Capitalization is insignificant however spelling is imperative!');
    }
    //console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}


function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

game();