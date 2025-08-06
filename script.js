function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());
