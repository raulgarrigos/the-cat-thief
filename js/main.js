// DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let gameWinScreenNode = document.querySelector("#gamewin-screen");

// Movement
let isPlayerMovingRight = true;
let isPlayerMovingTop = true;

let gameBoxWidth = 500;
let gameBoxHeight = 700;

let gameObject;

// Imagen Lady Momo
let momoImage = document.createElement("img");
momoImage.src = "/images/momo.png";
gameScreenNode.append(momoImage);
momoImage.classList.add("momo-image");
let momoNode = document.querySelector(".momo-image");

// BUTTONS

// Restart-btn
let restartBtn = document.createElement("button");
restartBtn.innerHTML = "Try again?";
gameOverScreenNode.append(restartBtn);
restartBtn.classList.add("restart-btn");
let restartBtnNode = document.querySelector(".restart-btn");

//Reset-btn
let resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset";
gameScreenNode.append(resetBtn);
resetBtn.classList.add("reset-btn");
let resetBtnNode = document.querySelector(".reset-btn");

//New-Game-btn
let newGameBtn = document.createElement("button");
newGameBtn.innerHTML = "New Game";
gameWinScreenNode.append(newGameBtn);
newGameBtn.classList.add("new-game-btn");
let newGameBtnNode = document.querySelector(".new-game-btn");

// Pause-btn
let pauseBtn = document.createElement("button");
pauseBtn.innerHTML = "Pause";
gameScreenNode.append(pauseBtn);
pauseBtn.classList.add("pause-btn");
let pauseBtnNode = document.querySelector(".pause-btn");

// Points-counter
let pointsCounter = document.createElement("h1");
pointsCounter.innerHTML = 0;
gameScreenNode.append(pointsCounter);
pointsCounter.classList.add("points-counter");
let pointsCounterNode = document.querySelector(".points-counter");

// Level-counter
let levelCounter = document.createElement("h1");
levelCounter.innerHTML = "Level 1";
gameScreenNode.append(levelCounter);
levelCounter.classList.add("level-counter");
let levelCounterNode = document.querySelector(".level-counter");

// STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  gameBoxNode.innerHTML = "";
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const restartGame = () => {
  gameBoxNode.innerHTML = "";
  gameOverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const pauseGame = () => {
  if (gameObject.isGameOn === true) {
    gameObject.isGameOn = false;
  } else {
    gameObject.isGameOn = true;
    gameObject.gameLoop();
  }
};

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);
newGameBtn.addEventListener("click", startGame);
pauseBtnNode.addEventListener("click", pauseGame);
resetBtnNode.addEventListener("click", () => {
  gameObject.isGameOn = false;
  restartGame();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    isPlayerMovingRight = true;
    gameObject.player.movementHorizontal();
  } else if (event.code === "ArrowLeft") {
    isPlayerMovingRight = false;
    gameObject.player.movementHorizontal();
  } else if (event.code === "ArrowUp") {
    isPlayerMovingTop = true;
    gameObject.player.movementVertical();
  } else if (event.code === "ArrowDown") {
    isPlayerMovingTop = false;
    gameObject.player.movementVertical();
  }
});
