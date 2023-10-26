class Shoot {
  constructor(x, y, type) {
    // Nodos
    this.node = document.createElement("img");
    if (type === "shuriken") {
      this.node.src = "./images/shuriken.png";
    } else if (type === "rose") {
      this.node.src = "./images/rose.png";
    }

    gameBoxNode.append(this.node);

    // Dimensiones
    this.w = 20;
    this.h = 20;

    // Posición
    this.x = x + 28;
    this.y = y + 10;

    // Ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    // Velocidad
    this.speed = 5;
  }

  // Disparo
  automaticMovement = () => {
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
