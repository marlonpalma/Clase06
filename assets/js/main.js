//alert("crack the code");
// Primero capturamos en variables los dos canvas creados en el documento html
let canvasSprites = document.querySelector("#canvas-sprites").getContext("2d");
let canvasMaze = document.querySelector("#canvas-maze").getContext("2d");

//Dijando los personajes
canvasSprites.beginPath(); // Empezamos el trazado

//Se utilizaran radianes para declarar los angulos, donde PI es igual a 180° (media vuelta), por lo tranto 2PI es vuelta completa
//Creamos un circulo completo
canvasSprites.arc(100, 100, 50, 0, 2 * Math.PI); //canvas.arc(xCenter, yCenter, radius, starAngle, endAngle, counterclockwise)
canvasSprites.fillStyle = "yellow";
canvasSprites.strokeStyle = "black";
canvasSprites.stroke();
canvasSprites.fill();

//Forma pacman
canvasSprites.beginPath();
canvasSprites.moveTo(200, 200); //Movemos el puntero al siguiente punto de inicio de trazado
canvasSprites.arc(200, 200, 50, 0.25 * Math.PI, 1.75 * Math.PI );
canvasSprites.fillStyle = "yellow";
canvasSprites.strokeStyle = "black";
canvasSprites.stroke();
canvasSprites.fill();

//Ahora agregamos el ojo
canvasSprites.moveTo(175, 225);
canvasSprites.beginPath();
canvasSprites.arc(200, 175, 7.5, 0, 2 * Math.PI);
canvasSprites.fillStyle = "black";
canvasSprites.fill();