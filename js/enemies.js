class Enemies {
  constructor(type, xPosition) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "no") {
      this.node.src = "./images/NO!.png";
    } else {
      this.node.src = "./images/EH!.png";
    }
    gameBoxNode.append(this.node);

    // Dimensiones

    if (type === "no") {
      this.w = 100;
      this.h = 60;
    } else {
      this.w = 100;
      this.h = 90;
    }

    // Posición
    this.x = xPosition;
    this.y = 0;

    // Ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.speed = 2;
  }

  // Movimiento

  automaticMovement = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
