// DOM Elements - Screens

let splashScreenNode = document.querySelector("#splash-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let gameWinScreenNode = document.querySelector("#gamewin-screen");

// DOM Elements - Music

// Música de las pantallas
let audioSplashNode = document.querySelector("#audio-splash");
audioSplashNode.volume = 0.1;
let audioGameNode = document.querySelector("#audio-game");
audioGameNode.volume = 0.1;
let audioGameOverNode = document.querySelector("#audio-game-over");
audioGameOverNode.volume = 0.1;
let audioWinNode = document.querySelector("#audio-win");
audioWinNode.volume = 0.1;

// Audio botón
let clickAudio = document.createElement("audio");
clickAudio.src = "./audio/click.ogg";
clickAudio.classList.add("audio-button");
let clickAudioNode = document.querySelector(".audio-button");
clickAudio.volume = 0.5;

// Audio enemigo
let collisionAudio = document.createElement("audio");
collisionAudio.src = "./audio/collision.ogg";
collisionAudio.classList.add("audio-collision");
let collisionAudioNode = document.querySelector(".audio-collision");
collisionAudio.volume = 0.1;

// Audio comer
let eatAudio = document.createElement("audio");
eatAudio.src = "./audio/eat.wav";
eatAudio.classList.add("audio-eat");
let eatAudioNode = document.querySelector(".audio-eat");
eatAudio.volume = 0.1;

// Audio lifesaver
let lifesaverAudio = document.createElement("audio");
lifesaverAudio.src = "./audio/lifesaver.ogg";
lifesaverAudio.classList.add("audio-lifesaver");
let lifesaverAudioNode = document.querySelector(".audio-lifesaver");
lifesaverAudio.volume = 0.1;

// Audio disparo
let shootAudio = document.createElement("audio");
shootAudio.src = "./audio/shoot.ogg";
shootAudio.classList.add("audio-shoot");
let shootAudioNode = document.querySelector(".audio-shoot");
shootAudio.volume = 0.1;

// Audio explosión
let explosionAudio = document.createElement("audio");
explosionAudio.src = "./audio/explosion.wav";
explosionAudio.classList.add("audio-explosion");
let explosionAudioNode = document.querySelector(".audio-explosion");
explosionAudio.volume = 0.1;

// Audio Mochi Navaja
let wilhelmAudio = document.createElement("audio");
wilhelmAudio.src = "./audio/wilhelm.wav";
wilhelmAudio.classList.add("audio-wilhelm");
let wilhelmAudioNode = document.querySelector(".audio-wilhelm");
wilhelmAudio.volume = 0.2;

// DOM Elements - Life

let threeHearts = document.createElement("img");
threeHearts.src = "./images/3Hearts.png";
gameScreenNode.append(threeHearts);
threeHearts.classList.add("three-hearts");
let threeHeartsNode = document.querySelector(".three-hearts");

let twoHearts = document.createElement("img");
twoHearts.src = "./images/2Hearts.png";
gameScreenNode.append(twoHearts);
twoHearts.classList.add("two-hearts");
let twoHeartsNode = document.querySelector(".two-hearts");

let oneHeart = document.createElement("img");
oneHeart.src = "./images/1Heart.png";
gameScreenNode.append(oneHeart);
oneHeart.classList.add("one-heart");
let oneHeartNode = document.querySelector(".one-heart");

// DOM Elements - Buttons

//Start-btn
let startBtnNode = document.querySelector("#start-btn");

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

// DOM Elements - Others

// Imagen Lady Momo
let momoImage = document.createElement("img");
momoImage.src = "./images/momo.png";
gameScreenNode.append(momoImage);
momoImage.classList.add("momo-image");
let momoNode = document.querySelector(".momo-image");

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

// Global Variables

// Movement
let isPlayerMovingRight = false;
let isPlayerMovingLeft = false;
let isPlayerMovingTop = false;
let isPlayerMovingBottom = false;

let gameBoxWidth = 500;
let gameBoxHeight = 700;

let gameObject;

// State Management Functions

const startGame = () => {
  gameBoxNode.innerHTML = "";

  audioSplashNode.pause();
  audioWinNode.pause();
  audioGameNode.play();

  clickAudio.play();

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const restartGame = () => {
  gameBoxNode.innerHTML = "";

  audioGameOverNode.pause();
  audioWinNode.pause();
  audioGameNode.play();

  if (twoHeartsNode.style.display === "flex") {
    twoHeartsNode.style.display = "none";
  } else if (oneHeartNode.style.display === "flex") {
    oneHeartNode.style.display = "none";
  }

  threeHeartsNode.style.display = "flex";

  if (momoNode.style.visibility === "hidden") {
    momoNode.style.visibility = "visible";
  }

  gameOverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

const pauseGame = () => {
  if (gameObject.isGameOn === true) {
    gameObject.isGameOn = false;
    audioGameNode.pause();
    clickAudio.play();
  } else {
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    audioGameNode.play();
    clickAudio.play();
  }
};

// Event Listeners

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);
pauseBtnNode.addEventListener("click", pauseGame);
resetBtnNode.addEventListener("click", () => {
  clickAudio.play();
  momoNode.style.visibility = "visible";
  gameObject.isGameOn = false;
  restartGame();
});
newGameBtn.addEventListener("click", () => {
  gameWinScreenNode.style.display = "none";
  gameObject.isGameOn = false;
  clickAudio.play();
  restartGame();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    isPlayerMovingRight = true;
  } else if (event.code === "ArrowLeft") {
    isPlayerMovingLeft = true;
  } else if (event.code === "ArrowUp") {
    isPlayerMovingTop = true;
  } else if (event.code === "ArrowDown") {
    isPlayerMovingBottom = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    isPlayerMovingRight = false;
  } else if (event.code === "ArrowLeft") {
    isPlayerMovingLeft = false;
  } else if (event.code === "ArrowUp") {
    isPlayerMovingTop = false;
  } else if (event.code === "ArrowDown") {
    isPlayerMovingBottom = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    shootAudio.play();
    gameObject.shoot();
  }
});
