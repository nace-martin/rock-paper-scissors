// Step 1. Create array for the options

let options = ["Rock", "Paper", "Scissors"];

// Step 2. Create a function that randomly generates the computers choice

function getComputerChoice() {
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}
// Step 3. Create a function that plays a round and prompts the user to choose an
//          option from the array

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's TIE";
  } else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Rock" && computerSelection === "Scissors")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${playerSelection} beats ${computerSelection}`;
  }
}
let playerSelection = "Paper";
let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// Step 4. Create a loop that plays the game for 3 rounds and a function that keeps
//          track of score of both players
//          - Print the score after each round
//          - Print the winner of the game after 3 rounds

function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt("Choose Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(game());
