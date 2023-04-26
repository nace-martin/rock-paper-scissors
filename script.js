// Create a function randomly returns either 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// This Function plays a single round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It\'s a Tie you both choose ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Loose ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Choice Rock, Paper or Scissors");
    if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
      alert("Invalid Option. Please enter either Rock, Paper, or Scissors");
      return;
    }
  }
}
