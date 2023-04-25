// Create a function randomly returns either 'Rock', 'Paper', or 'Scissors'

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// This Function plays a single round

function playRound() {
  let playerSelection = prompt("Choice Rock, Paper or Scissors");

  if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
    alert("Invalid Option. Please enter either Rock, Paper, or Scissors");
    return;
  }

  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    alert(`It\'s a Tie you both choose ${playerSelection}`);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    alert(`You Win ${playerSelection} beats ${computerSelection}`);
  } else {
    alert(`You Loose ${computerSelection} beats ${playerSelection}`);
  }
}

playRound();
