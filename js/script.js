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

let playerMove = "kamień";

printMessage(
  "Zagrałem " +
    computerMove +
    "! Jeśli Twój ruch to " +
    playerMove +
    ", to wygrywasz!"
);
