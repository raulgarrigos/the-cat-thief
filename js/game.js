class Game {
  constructor() {
    // Player
    this.player = new Player();

    // Enemies
    this.enemiesArr = [];

    //Timer
    this.timer = 0;

    // Game Switch
    this.isGameOn = true;
  }

  // Aparición enemigos
  enemiesSpawn = () => {
    if (this.timer % 125 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyNo = new Enemies("no", randomPosition);
      this.enemiesArr.push(newEnemyNo);
    }

    if (this.timer % 95 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyEh = new Enemies("eh", randomPosition + 200);
      this.enemiesArr.push(newEnemyEh);
    }
  };

  // Desaparición enemigos
  enemiesExit = () => {
    if (this.enemiesArr[0].y > 700) {
      this.enemiesArr[0].node.remove();
      this.enemiesArr.shift();
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
        // Collision detected!
        this.gameOver();
      }
    });
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
    this.enemiesSpawn();
    this.collisionEnemiesPlayer();
    this.enemiesExit();

    // recursión
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
