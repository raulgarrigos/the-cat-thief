class Player {
  constructor(type) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "mochi") {
      this.node.src = "./images/player.png";
    } else if (type === "momo") {
      this.node.src = "./images/momo_player.png";
    }

    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 80;
    this.h = 90;

    // Posición
    this.x = 190;
    this.y = 500;

    // Tipo
    this.type = type;

    // Ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.speed = 5;

    // Vidas
    this.life = 3;
  }

  // Movimiento
  movementHorizontal = () => {
    if (isPlayerMovingRight === true && this.x + this.w < gameBoxWidth) {
      this.x += this.speed;
    } else if (isPlayerMovingLeft === true && this.x > 0) {
      this.x -= this.speed;
    }
    this.node.style.left = `${this.x}px`;
  };

  movementVertical = () => {
    if (isPlayerMovingBottom === true && this.y + this.h < gameBoxHeight) {
      this.y += this.speed;
    } else if (isPlayerMovingTop === true && this.y > 0) {
      this.y -= this.speed;
    }
    this.node.style.top = `${this.y}px`;
  };
}
