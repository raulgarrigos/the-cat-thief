class Game {
  constructor() {
    this.player = new Player();
    this.enemiesArr = [];
    this.pointsArr = [];
    this.lifesaverArr = [];
    this.timer = 1;
    this.points = 0;
    this.isGameOn = true;
  }

  // Aparición enemigos
  enemiesSpawn = () => {
    if (this.timer % 135 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyNo = new Enemies("no", randomPosition, 1);
      this.enemiesArr.push(newEnemyNo);
    }

    if (this.timer % 220 === 0) {
      let randomPosition = Math.random() * 200;
      let newEnemyEh = new Enemies("eh", randomPosition + 200, 1);
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

  // Colisión enemigos + Perder vida
  collisionEnemiesPlayer = () => {
    this.enemiesArr.forEach((eachEnemy, i) => {
      if (
        eachEnemy.x < this.player.x + this.player.w &&
        eachEnemy.x + eachEnemy.w > this.player.x &&
        eachEnemy.y < this.player.y + this.player.h &&
        eachEnemy.y + eachEnemy.h > this.player.y
      ) {
        this.player.life -= 1;
        collisionAudio.play();
        eachEnemy.node.remove();
        this.enemiesArr.splice(i, 1);
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

  // Colisión puntos + Ganar puntos
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

  // Desaparición puntos
  pointsExit = () => {
    if (this.pointsArr.length) {
      if (this.pointsArr[0].y > 700) {
        this.pointsArr[0].node.remove();
        this.pointsArr.shift();
      }
    }
  };

  // Aparición lifesaver
  lifesaverSpawn = () => {
    if (this.timer % 1000 === 0) {
      let randomPosition = Math.random() * 400;
      let newLifesaver = new Lifesaver(randomPosition);
      this.lifesaverArr.push(newLifesaver);
    }
  };

  // Colisión lifesaver + Ganar vida
  restoreLife = () => {
    let lifeLimit = 3;

    this.lifesaverArr.forEach((eachLife, i) => {
      if (
        eachLife.x < this.player.x + this.player.w &&
        eachLife.x + eachLife.w > this.player.x &&
        eachLife.y < this.player.y + this.player.h &&
        eachLife.y + eachLife.h > this.player.y
      ) {
        if (this.player.life < lifeLimit) {
          this.player.life += 1;
          lifesaverAudio.play();
          eachLife.node.remove();
          this.lifesaverArr.splice(i, 1);
        }
      }
    });
  };

  // Desaparición lifesaver
  lifesaverExit = () => {
    if (this.lifesaverArr.length) {
      if (this.lifesaverArr[0].y > 700) {
        this.lifesaverArr[0].node.remove();
        this.lifesaverArr.shift();
      }
    }
  };

  // Niveles de dificultad
  increaseDifficulty = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      if (this.points >= 20 && this.points < 40) {
        levelCounter.innerHTML = `Level ${2}`;
      } else if (this.points >= 40 && this.points < 60) {
        eachEnemy.timer % 60 === 0;
        eachEnemy.speed = 3;
        levelCounter.innerHTML = `Level ${3}`;
      } else if (this.points >= 60 && this.points < 80) {
        eachEnemy.speed = 4;
        levelCounter.innerHTML = `Level ${4}`;
      } else if (this.points >= 80) {
        eachEnemy.speed = 5;
        levelCounter.innerHTML = `Level ${5}`;
      }

      this.pointsArr.forEach((eachPoint) => {
        if (this.points >= 20 && this.points < 40) {
          eachPoint.speed = 2;
          levelCounter.innerHTML = `Level ${2}`;
        } else if (this.points >= 40 && this.points < 60) {
          eachPoint.speed = 3;
          levelCounter.innerHTML = `Level ${3}`;
        } else if (this.points >= 60 && this.points < 80) {
          eachPoint.speed = 4;
          levelCounter.innerHTML = `Level ${4}`;
        } else if (this.points >= 80) {
          eachPoint.speed = 5;
          levelCounter.innerHTML = `Level ${5}`;
        }
      });

      this.lifesaverArr.forEach((eachLifesaver) => {
        if (this.points >= 20 && this.points < 40) {
          eachLifesaver.speed = 2;
          levelCounter.innerHTML = `Level ${2}`;
        } else if (this.points >= 40 && this.points < 60) {
          eachLifesaver.speed = 3;
          levelCounter.innerHTML = `Level ${3}`;
        } else if (this.points >= 60 && this.points < 80) {
          eachLifesaver.speed = 4;
          levelCounter.innerHTML = `Level ${4}`;
        } else if (this.points >= 80) {
          eachLifesaver.speed = 5;
          levelCounter.innerHTML = `Level ${5}`;
        }
      });
    });
  };

  // Perder vida
  loseLife = () => {
    if (this.player.life === 3) {
      threeHeartsNode.style.display = "flex";
      twoHeartsNode.style.display = "none";
      oneHeartNode.style.display = "none";
    } else if (this.player.life === 2) {
      threeHeartsNode.style.display = "none";
      twoHeartsNode.style.display = "flex";
      oneHeartNode.style.display = "none";
    } else if (this.player.life === 1) {
      threeHeartsNode.style.display = "none";
      twoHeartsNode.style.display = "none";
      oneHeartNode.style.display = "flex";
    } else if (this.player.life <= 0) {
      this.gameOver();
    }
  };

  // Ganar partida
  gameWin = () => {
    if (this.points >= 2) {
      this.isGameOn = false;

      audioGameNode.pause();
      audioWinNode.play();

      gameScreenNode.style.display = "none";
      gameWinScreenNode.style.display = "flex";
    }
  };

  // Perder partida
  gameOver = () => {
    this.isGameOn = false;

    audioGameNode.pause();
    audioGameOverNode.play();

    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  gameLoop = () => {
    // Movimientos objetos
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovement();
    });
    this.pointsArr.forEach((eachPoint) => {
      eachPoint.automaticMovement();
    });
    this.lifesaverArr.forEach((eachLifesaver) => {
      eachLifesaver.automaticMovement();
    });

    // this.player.movementHorizontal();
    // this.player.movementVertical();

    // Objetos apareciendo
    this.enemiesSpawn();
    this.pointsSpawn();
    this.lifesaverSpawn();

    // Colisiones y sus condiciones
    this.collisionEnemiesPlayer();
    this.loseLife();
    this.gainingPoints();
    this.gameWin();
    this.increaseDifficulty();
    this.restoreLife();

    // Objetos desapareciendo
    this.enemiesExit();
    this.pointsExit();
    this.lifesaverExit();

    // recursión
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
