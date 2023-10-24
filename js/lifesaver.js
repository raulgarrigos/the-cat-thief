class Lifesaver {
  constructor(xPosition) {
    this.node = document.createElement("img");
    this.node.src = "./images/zzz.png";
    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 60;
    this.h = 50;

    // Posición
    this.x = xPosition;
    this.y = -60;

    // Ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.speed = 1;
  }

  // Movimiento
  automaticMovement = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
