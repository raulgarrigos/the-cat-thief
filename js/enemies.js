class Enemies {
  constructor(type, xPosition, speed) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "no") {
      this.node.src = "./images/NO!.png";
    } else {
      this.node.src = "./images/EH!.png";
    }
    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 50;
    this.h = 25;

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
    this.speed = speed;
  }

  // Movimiento
  automaticMovement = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
