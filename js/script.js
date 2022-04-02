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

let playerMove = "nieznany ruch";

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == 2) {
  playerMove = "papier";
} else if (playerInput == 3) {
  playerMove = "nożyce";
}

printMessage(
  "Zagrałem " +
    computerMove +
    "! Jeśli Twój ruch to " +
    playerMove +
    ", to wygrywasz!"
);
