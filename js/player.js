class Player {
  constructor() {
    // Nodos
    this.node = document.createElement("img");
    this.node.src = "./images/player.png";
    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 100;
    this.h = 110;

    // Posición
    this.x = 190;
    this.y = 500;

    // Ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.movementSpeed = 5;
  }

  //Movimiento

  movementHorizontal = () => {
    if (isPlayerMovingRight === true) {
      this.x += this.movementSpeed;
    } else if (isPlayerMovingRight === false) {
      this.x -= this.movementSpeed;
    }
    this.node.style.left = `${this.x}px`;
  };

  movementVertical = () => {
    if (isPlayerMovingTop === false) {
      this.y += this.movementSpeed;
    } else if (isPlayerMovingTop === true) {
      this.y -= this.movementSpeed;
    }
    this.node.style.top = `${this.y}px`;
  };

  // movementDiagonal = () => {
  //   if (isPlayerMovingRight === true && isPlayerMovingTop === true) {
  //     this.x += this.movementSpeed;
  //     this.y -= this.movementSpeed;
  //   }

  //   this.node.style.left = `${this.x}px`;
  //   this.node.style.top = `${this.y}px`;
  // };
}
