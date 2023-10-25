class Enemies {
  constructor(type, xPosition, speed) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "no") {
      this.node.src = "./images/no.png";
    } else if (type === "eh") {
      this.node.src = "./images/eh.png";
    } else {
      this.node.src = "./images/ladron.png";
    }
    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 65;
    this.h = 40;

    if (type === "ladron") {
      this.w = 160;
      this.h = 50;
    }

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
