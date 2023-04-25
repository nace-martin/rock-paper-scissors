// Create a function randomly returns either 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// This Function plays a single round

function playRound() {
  let playerSelection = prompt("Rock", "Paper", "Scissors");
  let getComputerChoice = computerSelection;
}
