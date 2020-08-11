let userInputFromCommandLine = process.argv[2];


console.log(userInputFromCommandLine)

function validGameOption(rockPaperSkizzer) {
    let lowercase = rockPaperSkizzer.toLowerCase();
    if (lowercase === 'rock' || lowercase === 'paper' || lowercase === 'scissor') {
    } else {
        return console.log('you need to enter a valid play')
    }

}
function computersTurn() {

    let computerChoice = Math.random();
    if(computerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (computerChoice > .34 && computerChoice <= .67) {
        computerChoice = "scissor";
    } else {
        computerChoice = "paper"
    }
    return computerChoice;

}

function comparingComputersChoiceToUsersChoice(computersChoice, usersChoice) {

    if (computersChoice === "paper") {
        if (usersChoice === "rock") {
            return "paper wins";
        } else {
            if (usersChoice === "scissor") {
                return "scissors wins";
            }
        }
    }
        if (computersChoice === "scissor") {
            if (usersChoice === "rock") {
                return "rock wins";
            } else {
                if (usersChoice === "paper") {
                    return "scissors wins";
                }
            }
        }
        if ( computersChoice === 'rock') {
            if (usersChoice === 'scissor') {
                return 'rock wins';
            } else {
                if (usersChoice === 'paper') {
                    return 'paper wins'
                }
            }
        }
        if (computersChoice === usersChoice) {
            return "it's a tie";
        }

}

let retCompsTurn = computersTurn();
console.log('the computer choose', retCompsTurn);

let winner = comparingComputersChoiceToUsersChoice(retCompsTurn, userInputFromCommandLine);
console.log(winner)
