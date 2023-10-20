// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNODE = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");

let isPlayerMovingRight = true;
let isPlayerMovingTop = true;
let gameObject;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // iniciariamos el gameLoop
  gameObject = new Game(); // Accedemos a la variable global
  console.log(gameObject);
  gameObject.gameLoop();
  // Creamos un objeto nuevo de clase Game e invocamos el Loop
};

// * EVENT LISTENERS
startBtnNODE.addEventListener("click", startGame);

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
