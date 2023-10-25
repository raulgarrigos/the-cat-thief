class Shoot {
  constructor(x, y) {
    // Nodos
    this.node = document.createElement("img");
    this.node.src = "./images/shuriken.png";
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
    this.speed = 2;
  }

  // Disparo
  automaticMovement = () => {
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
