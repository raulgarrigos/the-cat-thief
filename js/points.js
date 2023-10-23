class Points {
  constructor(type, xPosition) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "pizza") {
      this.node.src = "./images/pizza.png";
    } else if (type === "fish") {
      this.node.src = "./images/fish.png";
    } else if (type === "chicken") {
      this.node.src = "./images/chicken.png";
    }
    gameBoxNode.append(this.node);

    // Tipo
    this.type = type;

    // Dimensiones
    if (type === "chicken") {
      this.w = 40;
      this.h = 40;
    } else {
      this.w = 50;
      this.h = 50;
    }

    // Posición
    this.x = xPosition;
    this.y = -60;

    // Ajustar valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.speed = 2;
  }

  //Movimiento
  automaticMovement = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
