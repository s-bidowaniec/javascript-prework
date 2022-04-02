let randomNumber = Math.floor(Math.random() * 3 + 1);

/*let computerMove = "kamień";*/
console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else {
  computerMove = "nożyce";
}
printMessage("Mój ruch to: " + computerMove);

let playerMove = "nieznany ruch";
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == 2) {
  playerMove = "papier";
} else if (playerInput == 3) {
  playerMove = "nożyce";
}
printMessage("Twój ruch to: " + playerMove);

if (playerMove == "nieznany ruch") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == playerMove) {
  printMessage("Remis!");
} else if (computerMove == "kamień" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nożyce") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "kamień" && playerMove == "nożyce") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == "papier" && playerMove == "kamień") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == "nożyce" && playerMove == "papier") {
  printMessage("Ty przegrywasz!");
}
