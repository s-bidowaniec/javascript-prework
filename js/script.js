{
  let pc_score = 0;
  let player_score = 0;
  const getMoveName = (argMoveId) => {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
  };

  const displayResult = (argComputerMove, argPlayerMove) => {
    console.log("moves:", argComputerMove, argPlayerMove);
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
    if (argPlayerMove == "nieznany ruch") {
      printMessage("Ty przegrywasz!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Remis!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
      player_score += 1;
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
      player_score += 1;
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz!");
      player_score += 1;
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Ty przegrywasz!");
      pc_score += 1;
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Ty przegrywasz!");
      pc_score += 1;
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Ty przegrywasz!");
      pc_score += 1;
    }
    clearMessages("results");
    printMessage(player_score + " - " + pc_score, "results");
  };

  const playGame = (playerInput) => {
    clearMessages();
    console.log("player input value:", playerInput);
    const playerMove = getMoveName(playerInput);
    console.log("player move is:", playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Random number: " + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log("computer move is:", computerMove);
    displayResult(computerMove, playerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
