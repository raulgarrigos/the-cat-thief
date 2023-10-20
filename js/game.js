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
    if (this.timer % 350 === 0) {
      let randomPosition = Math.random() * 400;

      let newEnemyNo = new Enemies("no", randomPosition);
      this.enemiesArr.push(newEnemyNo);
    }

    if (this.timer % 120 === 0) {
      let randomPosition = Math.random() * 400;
      let newEnemyEh = new Enemies("eh", randomPosition);
      this.enemiesArr.push(newEnemyEh);
    }
  };

  gameLoop = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovement();
    });
    this.enemiesSpawn();

    // recursión
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
