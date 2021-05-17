const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

// let x = 0;
// let y = 150;

// let placar = 0;
// let hit = false;

// requestAnimationFrame(gameloop);
// function gameloop() {
//   if (x <= 700) {
//     desenharQuadrado(x, y);
//   } else {
//     clearTimeout();
//   }

//   x += 10;
//   requestAnimationFrame(gameloop);
// }

// function desenharQuadrado(pX, pY) {
//   ctx.clearRect(0, 0, 800, 400);
//   let img = new Image();
//   img.src = "./nave.png";

//   ctx.createPattern(img, "repeat");
//   ctx.fillRect(pX, pY, 100, 100);
// }

// ---------------------------------------------------------------------------
let x = 0;
let y = 150;
let image = "nave-cima.png";
//a função gameloop é chamada aqui
requestAnimationFrame(gameloop);

window.onkeydown = pressionaTecla;
function pressionaTecla(tecla) {
  if (tecla.keyCode == 38) {
    image = "nave-cima.png";
    y = y - 5; //diminuir y tem o efeito de subida
  }
  if (tecla.keyCode == 40) {
    image = "nave-baixo.png";
    y = y + 5; //aumentar y tem o efeito de descer
  }
  if (tecla.keyCode == 39) {
    image = "nave-direita.png";
    x = x + 5; //aumentar o x tem o efeito de ir para a direita
  }
  if (tecla.keyCode == 37) {
    image = "nave-esquerda.png";
    x = x - 5; //diminuir o x tem o efeito de ir para a esquerda
  }
}

function gameloop() {
  desenharNave(x, y);

  //chama novamente o ciclo da animação
  requestAnimationFrame(gameloop);
}

function desenharNave(pX, pY) {
  ctx.clearRect(0, 0, 800, 400); //antes de fazer o desenho é preciso limpar o canvas
  ctx.fillStyle = "#00F";

  const imagem = new Image();
  imagem.src = image;
  ctx.drawImage(imagem, pX, pY);
}

// ----------------------------------------------------------------------------
// ASTEROIDES ALEATORIOS

// var fps = 1;
// // var fps = 1 / 3;
// var xQ, yQ;
// function desenharQ() {
//   setTimeout(function () {
//     requestAnimationFrame(desenharQ);
//     // Drawing code goes here
//     console.log(xQ + " - " + yQ);
//     ctx.clearRect(xQ, yQ, 30, 30);
//     xQ = Math.floor(Math.random() * canvas.width);
//     yQ = Math.floor(Math.random() * canvas.height);
//     ctx.fillStyle = "red";
//     ctx.fillRect(xQ, yQ, 30, 30);
//   }, 1000 / fps);
// }

// ASTEROIDES ALEATORIOS
// ----------------------------------------------------------------------------
