class Game {
  constructor() {
    // Player
    this.player = new Player();

    // Enemies
    this.enemiesArr = [];

    // Points
    this.pointsArr = [];

    //Timer
    this.timer = 1;

    //Points
    this.points = 0;

    // Game Switch
    this.isGameOn = true;
  }

  // Aparición enemigos
  enemiesSpawn = () => {
    if (this.timer % 190 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyNo = new Enemies("no", randomPosition);
      this.enemiesArr.push(newEnemyNo);
    }

    if (this.timer % 225 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyEh = new Enemies("eh", randomPosition + 200);
      this.enemiesArr.push(newEnemyEh);
    }
  };

  // Desaparición enemigos
  enemiesExit = () => {
    if (this.enemiesArr.length) {
      if (this.enemiesArr[0].y > 700) {
        this.enemiesArr[0].node.remove();
        this.enemiesArr.shift();
      }
    }
  };

  // Colisión enemigos con player
  collisionEnemiesPlayer = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      if (
        eachEnemy.x < this.player.x + this.player.w &&
        eachEnemy.x + eachEnemy.w > this.player.x &&
        eachEnemy.y < this.player.y + this.player.h &&
        eachEnemy.y + eachEnemy.h > this.player.y
      ) {
        this.gameOver();
      }
    });
  };

  // Aparición puntos
  pointsSpawn = () => {
    if (this.timer % 175 === 0) {
      let randomPosition = Math.random() * 400;
      let newFish = new Points("fish", randomPosition);
      this.pointsArr.push(newFish);
    }

    if (this.timer % 605 === 0) {
      let randomPosition = Math.random() * 400;
      let newPizza = new Points("pizza", randomPosition);
      this.pointsArr.push(newPizza);
    }

    if (this.timer % 350 === 0) {
      let randomPosition = Math.random() * 400;
      let newChicken = new Points("chicken", randomPosition);
      this.pointsArr.push(newChicken);
    }
  };

  // Sumar puntos
  gainingPoints = () => {
    this.pointsArr.forEach((eachPoint, i) => {
      if (
        eachPoint.x < this.player.x + this.player.w &&
        eachPoint.x + eachPoint.w > this.player.x &&
        eachPoint.y < this.player.y + this.player.h &&
        eachPoint.y + eachPoint.h > this.player.y
      ) {
        if (eachPoint.type === "fish") {
          this.points++;
        } else if (eachPoint.type === "chicken") {
          this.points += 3;
        } else if (eachPoint.type === "pizza") {
          this.points += 5;
        }
        eachPoint.node.remove();
        this.pointsArr.splice(i, 1);
      }
    });
    pointsCounter.innerHTML = `Points: ${this.points}`;
  };

  gameWin = () => {
    if (this.points >= 10) {
      this.isGameOn = false;
      gameScreenNode.style.display = "none";
      gameWinScreenNode.style.display = "flex";
    }
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  gameLoop = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovement();
    });
    this.pointsArr.forEach((eachPoint) => {
      eachPoint.automaticMovement();
    });
    this.enemiesSpawn();
    this.pointsSpawn();
    // this.collisionEnemiesPlayer();
    this.gainingPoints();
    this.enemiesExit();
    this.gameWin();

    // recursión
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
