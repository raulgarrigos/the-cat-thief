// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");

let isPlayerMovingRight = true;
let isPlayerMovingTop = true;
let gameObject;

// Restart-btn
let restartBtn = document.createElement("button");
restartBtn.innerHTML = "Restart";
gameOverScreenNode.append(restartBtn);
restartBtn.classList.add("restart-btn");
let restartBtnNode = document.querySelector(".restart-btn");

// Pause-btn

let pauseBtn = document.createElement("button");
pauseBtn.innerHTML = "Pause";
gameScreenNode.append(pauseBtn);
pauseBtn.classList.add("pause-btn");
let pauseBtnNode = document.querySelector(".pause-btn");

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();

  gameObject.gameLoop();
};

const restartGame = () => {
  gameOverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const pauseGame = () => {
  gameObject.isGameOn = false;
};

const unpauseGame = () => {
  if (gameObject.isGameOn === false) {
    gameObject.isGameOn = true;
  }
};

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);

restartBtnNode.addEventListener("click", restartGame);

pauseBtnNode.addEventListener("click", pauseGame);
pauseBtnNode.addEventListener("click", unpauseGame);

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

// document.addEventListener("keydown", (event) => {
//   if (event.code === "ArrowUp" && event.code === "ArrowRight") {
//     isPlayerMovingRight = true;
//     isPlayerMovingTop = true;
//     console.log("CTRL Left and b Pressed");
//     gameObject.player.movementDiagonal();
//     // } else if (event.code === "ArrowRight" && event.code === "ArrowDown") {
//     //   isPlayerMovingRight = true;
//     //   isPlayerMovingTop = false;
//     // } else if (event.code === "ArrowDown" && event.code === "ArrowLeft") {
//     //   isPlayerMovingRight = false;
//     //   isPlayerMovingTop = false;
//     // } else if (event.code === "ArrowLeft" && event.code === "ArrowUp") {
//     //   isPlayerMovingRight = false;
//     //   isPlayerMovingTop = true;
//   }
// });