let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  input = prompt("Choose between rock, paper and scissors!");
  return input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log("Human: " + humanChoice + "\nComputer: " + computerChoice);
  if (humanChoice == computerChoice) {
    console.log(
      "Draw! Both used " + humanChoice[0].toUpperCase() + humanChoice.slice(1)
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log(
      "You lose! " +
        computerChoice[0].toUpperCase() +
        computerChoice.slice(1) +
        " beats " +
        humanChoice[0].toUpperCase() +
        humanChoice.slice(1)
    );
    computerScore++;
  } else {
    console.log(
      "You win! " +
        humanChoice[0].toUpperCase() +
        humanChoice.slice(1) +
        " beats " +
        computerChoice[0].toUpperCase() +
        computerChoice.slice(1)
    );
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
