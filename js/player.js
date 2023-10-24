class Player {
  constructor() {
    // Nodos
    this.node = document.createElement("img");
    this.node.src = "./images/player.png";
    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 80;
    this.h = 90;

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
    this.movementSpeed = 15;

    // Vidas
    this.life = 3;
  }

  // Movimiento
  movementHorizontal = () => {
    if (isPlayerMovingRight === true && this.x + this.w < gameBoxWidth) {
      this.x += this.movementSpeed;
    } else if (isPlayerMovingRight === false && this.x > 0) {
      this.x -= this.movementSpeed;
    }
    this.node.style.left = `${this.x}px`;
  };

  movementVertical = () => {
    if (isPlayerMovingTop === false && this.y + this.h < gameBoxHeight) {
      this.y += this.movementSpeed;
    } else if (isPlayerMovingTop === true && this.y > 0) {
      this.y -= this.movementSpeed;
    }
    this.node.style.top = `${this.y}px`;
  };
}
