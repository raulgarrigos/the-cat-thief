class Game {
  constructor() {
    this.player = new Player("mochi");
    this.enemiesArr = [];
    this.pointsArr = [];
    this.lifesaverArr = [];
    this.shootArr = [];
    this.timer = 1;
    this.points = 0;
    this.shootType = "shuriken";
    this.isGameOn = true;
  }

  // Aparición enemigos
  enemiesSpawn = () => {
    if (this.timer % 75 === 0) {
      let randomPosition = Math.random() * 400;
      let newEnemyNo = new Enemies("no", randomPosition, 1);
      this.enemiesArr.push(newEnemyNo);
    }

    if (this.timer % 95 === 0) {
      let randomPosition = Math.random() * 400;
      let newEnemyEh = new Enemies("eh", randomPosition, 1);
      this.enemiesArr.push(newEnemyEh);
    }

    if (this.timer % 135 === 0 && this.points >= 40) {
      let randomPosition = Math.random() * 200;
      let newEnemyLadron = new Enemies("ladron", randomPosition, 2);
      this.enemiesArr.push(newEnemyLadron);
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
    this.enemiesArr.forEach((eachEnemy, enemyIndex) => {
      if (
        eachEnemy.x < this.player.x + this.player.w &&
        eachEnemy.x + eachEnemy.w > this.player.x &&
        eachEnemy.y < this.player.y + this.player.h &&
        eachEnemy.y + eachEnemy.h > this.player.y
      ) {
        this.player.life -= 1;
        collisionAudio.play();
        eachEnemy.node.remove();
        this.enemiesArr.splice(enemyIndex, 1);
      }
    });
  };

  // Aparición puntos
  pointsSpawn = () => {
    if (this.timer % 145 === 0) {
      let randomPosition = Math.random() * 400;
      let newFish = new Points("fish", randomPosition);
      this.pointsArr.push(newFish);
    }
    if (this.timer % 210 === 0) {
      let randomPosition = Math.random() * 400;
      let newPizza = new Points("pizza", randomPosition);
      this.pointsArr.push(newPizza);
    }

    if (this.timer % 175 === 0) {
      let randomPosition = Math.random() * 400;
      let newChicken = new Points("chicken", randomPosition);
      this.pointsArr.push(newChicken);
    }

    if (this.timer % 350 === 0 && this.points >= 60) {
      let randomPosition = Math.random() * 400;
      let newMochiNavaja = new Points("mochinavaja", randomPosition);
      this.pointsArr.push(newMochiNavaja);
    }
  };

  // Colisión puntos + Ganar puntos
  gainingPoints = () => {
    this.pointsArr.forEach((eachPoint, pointIndex) => {
      if (
        eachPoint.x < this.player.x + this.player.w &&
        eachPoint.x + eachPoint.w > this.player.x &&
        eachPoint.y < this.player.y + this.player.h &&
        eachPoint.y + eachPoint.h > this.player.y
      ) {
        if (eachPoint.type === "fish") {
          this.points++;
          eatAudio.currentTime = 0;
          eatAudio.play();
        } else if (eachPoint.type === "chicken") {
          this.points += 3;
          eatAudio.currentTime = 0;
          eatAudio.play();
        } else if (eachPoint.type === "pizza") {
          this.points += 5;
          eatAudio.currentTime = 0;
          eatAudio.play();
        } else if (eachPoint.type === "mochinavaja") {
          this.points += 10;
          eatAudio.currentTime = 0;
          wilhelmAudio.play();
        }
        eachPoint.node.remove();
        this.pointsArr.splice(pointIndex, 1);
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

    this.lifesaverArr.forEach((eachLife, lifeIndex) => {
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
          this.lifesaverArr.splice(lifeIndex, 1);
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
    // Cambia el contador de nivel
    if (this.points >= 20 && this.points < 40) {
      levelCounter.innerHTML = `Level 2`;
    } else if (this.points >= 40 && this.points < 60) {
      levelCounter.innerHTML = `Level 3`;
    } else if (this.points >= 60 && this.points < 80) {
      levelCounter.innerHTML = `Level 4`;
    } else if (this.points >= 80) {
      levelCounter.innerHTML = `Level 5`;
    }

    // Incrementa velocidad jugador
    if (this.points >= 20 && this.points < 40) {
      this.player.speed = 6;
    } else if (this.points >= 40 && this.points < 60) {
      this.player.speed = 7;
    } else if (this.points >= 60 && this.points < 80) {
      this.player.speed = 8;
    } else if (this.points >= 80) {
      this.player.speed = 10;
    }

    // Incrementa velocidad música
    if (this.points >= 10 && this.points < 20) {
      audioGameNode.playbackRate = 1.2;
    } else if (this.points >= 20 && this.points < 30) {
      audioGameNode.playbackRate = 1.3;
    } else if (this.points >= 30 && this.points < 40) {
      audioGameNode.playbackRate = 1.4;
    } else if (this.points >= 40 && this.points < 50) {
      audioGameNode.playbackRate = 1.5;
    } else if (this.points >= 50 && this.points < 60) {
      audioGameNode.playbackRate = 1.6;
    } else if (this.points >= 60 && this.points < 70) {
      audioGameNode.playbackRate = 1.7;
    } else if (this.points >= 70 && this.points < 80) {
      audioGameNode.playbackRate = 1.8;
    } else if (this.points >= 80 && this.points < 90) {
      audioGameNode.playbackRate = 1.9;
    } else if (this.points >= 90 && this.points < 100) {
      audioGameNode.playbackRate = 2.0;
    }

    // Incrementa velocidad enemigos
    this.enemiesArr.forEach((eachEnemy) => {
      if (this.points >= 20 && this.points < 40) {
        eachEnemy.speed = 2;
      } else if (this.points >= 40 && this.points < 60) {
        eachEnemy.speed = 4;
      } else if (this.points >= 60 && this.points < 80) {
        eachEnemy.speed = 8;
      } else if (this.points >= 80) {
        eachEnemy.speed = 16;
      }
    });

    // Incrementa velocidad puntos
    this.pointsArr.forEach((eachPoint) => {
      if (this.points >= 20 && this.points < 40) {
        eachPoint.speed = 2;
      } else if (this.points >= 40 && this.points < 60) {
        eachPoint.speed = 4;
      } else if (this.points >= 60 && this.points < 80) {
        eachPoint.speed = 6;
      } else if (this.points >= 80) {
        eachPoint.speed = 12;
      }
    });

    // Incrementa velocidad salvavidas
    this.lifesaverArr.forEach((eachLifesaver) => {
      if (this.points >= 20 && this.points < 40) {
        eachLifesaver.speed = 2;
      } else if (this.points >= 40 && this.points < 60) {
        eachLifesaver.speed = 4;
      } else if (this.points >= 60 && this.points < 80) {
        eachLifesaver.speed = 6;
      } else if (this.points >= 80) {
        eachLifesaver.speed = 12;
      }
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
    if (this.points >= 1) {
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

  // Disparo
  shoot = () => {
    if (gameObject.isGameOn) {
      let newShoot = new Shoot(this.player.x, this.player.y, this.shootType);
      this.shootArr.push(newShoot);
    }
  };

  // Colisión disparo + Destruir objetos
  destroyEnemies = () => {
    this.shootArr.forEach((eachShoot, shootIndex) => {
      this.enemiesArr.forEach((eachEnemy, enemyIndex) => {
        if (
          eachShoot.x < eachEnemy.x + eachEnemy.w &&
          eachShoot.x + eachShoot.w > eachEnemy.x &&
          eachShoot.y < eachEnemy.y + eachEnemy.h &&
          eachShoot.y + eachShoot.h > eachEnemy.y
        ) {
          explosionAudio.play();
          eachShoot.node.remove();
          eachEnemy.node.remove();
          this.shootArr.splice(shootIndex, 1);
          this.enemiesArr.splice(enemyIndex, 1);
        }
      });
    });

    if (this.points >= 40) {
      this.shootArr.forEach((eachShoot, shootIndex) => {
        this.pointsArr.forEach((eachPoint, pointIndex) => {
          if (
            eachShoot.x < eachPoint.x + eachPoint.w &&
            eachShoot.x + eachShoot.w > eachPoint.x &&
            eachShoot.y < eachPoint.y + eachPoint.h &&
            eachShoot.y + eachShoot.h > eachPoint.y
          ) {
            explosionAudio.play();
            eachShoot.node.remove();
            eachPoint.node.remove();
            this.shootArr.splice(shootIndex, 1);
            this.pointsArr.splice(pointIndex, 1);
          }
        });
      });
    }
  };

  // Desaparición disparos
  shootExit = () => {
    if (this.shootArr.length) {
      if (this.shootArr[0].y < 0) {
        this.shootArr[0].node.remove();
        this.shootArr.shift();
      }
    }
  };

  // Change player
  changePlayer = () => {
    if (this.points >= 60) {
      this.player.node.src = "./images/momo_player.png";
      momoNode.style.visibility = "hidden";
      this.shootType = "rose";
    }
  };

  gameLoop = () => {
    // Cambio
    this.changePlayer();

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

    this.shootArr.forEach((eachShoot) => {
      eachShoot.automaticMovement();
    });
    this.player.movementHorizontal();
    this.player.movementVertical();

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
    this.destroyEnemies();

    // Objetos desapareciendo
    this.enemiesExit();
    this.pointsExit();
    this.lifesaverExit();
    this.shootExit();

    // recursión
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
