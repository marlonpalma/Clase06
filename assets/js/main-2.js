//alert("crack the code");
// Primero capturamos en variables los dos canvas creados en el documento html
let canvasSprites = document.querySelector("#canvas-sprites").getContext("2d");
let canvasMaze = document.querySelector("#canvas-maze").getContext("2d");

//Primero vamos a encerrar el codigo de creacion de personaje en una funcion
//Trabajamos con pixeles y no con cuadros
const squeriSize = 10; //pixeles

//Datos: tamaño de pacman, los fantasmas, etc;
const sizePacman = 2;   // 2 cuadrados * 5 = 10px
const widthGhost = 2;
const sizeFood = 3;

//Posiciones de pacman tambien los declaramos
var xPacman = 2;
var yPacman = 2;

function drawPacman() {
  //Transformar de cuadrado a pixeles
  let size = squeriSize * sizePacman;
  let x = squeriSize * xPacman + size / 5;
  let y = squeriSize * yPacman + size / 5;

  let radius = size / 2;

  //Forma pacman
  canvasSprites.beginPath();
  canvasSprites.moveTo(x, y); //Movemos el puntero al siguiente punto de inicio de trazado
  canvasSprites.arc(x, y, radius, 0.25 * Math.PI, 1.75 * Math.PI);
  canvasSprites.fillStyle = "yellow";
  canvasSprites.strokeStyle = "black";
  canvasSprites.stroke();
  canvasSprites.fill();

  //Ahora agregamos el ojo
  let eyeRadius = radius / 7.5;
  let eyeY = y - 4 * eyeRadius;

  canvasSprites.moveTo(175, 225);
  canvasSprites.beginPath();
  canvasSprites.arc(x, eyeY, eyeRadius, 0, 2 * Math.PI);
  canvasSprites.fillStyle = "black";
  canvasSprites.fill();
}

function drawGhost(x, y , color) {
  //transformamos cuadrados a pixeles
  let width = squeriSize * widthGhost;
  x = squeriSize * x + squeriSize / 2;
  y = squeriSize * y + squeriSize / 4;

  let radius = width / 2;

  canvasSprites.beginPath();

  //Comenzamos con el semicirculo
  canvasSprites.arc(x, y, radius, Math.PI, 0);  // Semi círculo (cabeza)
  canvasSprites.moveTo(x + radius, y);
  canvasSprites.lineTo(x + radius, y + 0.75 * width);  // Recta hacia abajo
  canvasSprites.lineTo(x + 0.5 * radius, y + 0.5 * width);  // Diagonal hacia arriba-izquierda
  canvasSprites.lineTo(x, y + 0.75 * width);  // Diagonal hacia abajo-izquierda
  canvasSprites.lineTo(x - 0.5 * radius, y + 0.5 * width);  // Diagonal hacia arriba-izquierda
  canvasSprites.lineTo(x - radius, y + 0.75 * width);  // Diagonal hacia abajo-izquierda
  canvasSprites.lineTo(x - radius, y);  // Recta hacia arriba

  canvasSprites.fillStyle = color;
  canvasSprites.fill();

  canvasSprites.beginPath();
  canvasSprites.arc(x - 0.5 * radius, y, 0.12 * radius, 0, 2 * Math.PI);
  canvasSprites.arc(x + 0.5 * radius, y, 0.12 * radius, 0, 2 * Math.PI);
  canvasSprites.fillStyle = "black"
  canvasSprites.fill();
}

drawPacman();
drawGhost(10,10,"blue");