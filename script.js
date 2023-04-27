// Create a function randomly returns either 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// This Function plays a single round
function game() {
  let round = 1;
  let playScore = 0;
  let computerScore = 0;

  function playRound() {
    let playerSelection = prompt(`Choose Rock, Paper, or Scissors`);
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      return `Tie`;
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      playScore++;
      return `player`;
    } else {
      computerScore++;
      return `computer`;
    }
  }
}
