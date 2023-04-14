// Step 1. Create array for the options

let options = ["Rock", "Paper", "Scissors"];

// Step 2. Create a function that randomly generates the computers choice

function getComputerChoice() {
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}
console.log(getComputerChoice);

// Step 3. Create a function that prompts the user to choose an option from the array
// Step 4. Next determine the outcome of the game ie winner/loser/draw
// Step 5. Create a function that plays a single round and determines if the player won/lost/drawn
//          and output a string like "You lost: Paper beats Rock"
// Step 6. Create a loop that plays the game for 3 rounds and function that keeps
//          score of both players
