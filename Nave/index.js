const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

class ClassNave {
  constructor() {
    this.x = 350;
    this.y = 150;
    this.image = "nave-cima.png";
    this.placar = 0;
    this.hit = false;
  }

  desenharNave(pX, pY) {
    ctx.clearRect(0, 0, 800, 400); //antes de fazer o desenho é preciso limpar o canvas
    const imagem = new Image();
    imagem.src = this.image;
    ctx.drawImage(imagem, pX, pY);
  }
}
const Nave = new ClassNave();

class Keyboard {
  static ArrowUp() {
    if (Nave.y > 0) {
      Nave.image = "nave-cima.png";
      Nave.y -= 20;
    }
  }

  static ArrowDown() {
    if (Nave.y < 300) {
      Nave.image = "nave-baixo.png";
      Nave.y += 20;
    }
  }

  static ArrowRight() {
    if (Nave.x < 691) {
      Nave.image = "nave-direita.png";
      Nave.x += 20;
    }
  }

  static ArrowLeft() {
    if (Nave.x > 0) {
      Nave.image = "nave-esquerda.png";
      Nave.x -= 20;
    }
  }

  static handleKeyDown(event) {
    const keyPressed = event.key;
    const move = Keyboard[keyPressed];

    if (move) {
      move();
    }
  }
}

// requestAnimationFrame(gameloop);
// function gameloop() {
//   if (x <= 700) {
//     desenharQuadrado(x, y);
//   } else {
//     clearTimeout();
//   }

//   x += 10;
//   requestAnimationvar fps = 1;Frame(gameloop);
// }

// function desenharQuadrado(pX, pY) {
//   ctx.clearRect(0, 0, 800, 400);
//   let img = new Image();
//   img.src = "./nave.png";

//   ctx.createPattern(img, "repeat");
//   ctx.fillRect(pX, pY, 100, 100);
// }

// ---------------------------------------------------------------------------
//a função gameloop é chamada aqui
requestAnimationFrame(gameloop);
function gameloop() {
  window.onkeydown = Keyboard.handleKeyDown;

  const x = Nave.x;
  const y = Nave.y;
  Nave.desenharNave(x, y);

  //chama novamente o ciclo da animação
  requestAnimationFrame(gameloop);
}

// ----------------------------------------------------------------------------
// ASTEROIDES ALEATORIOS

var fps = 1;
// var fps = 1 / 3;
var xQ, yQ;
function desenharQ() {
  setTimeout(function () {
    requestAnimationFrame(desenharQ);
    // Drawing code goes here
    console.log(xQ + " - " + yQ);
    ctx.clearRect(xQ, yQ, 30, 30);
    xQ = Math.floor(Math.random() * canvas.width);
    yQ = Math.floor(Math.random() * canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(xQ, yQ, 30, 30);
  }, 1000 / fps);
}
desenharQ();

// ASTEROIDES ALEATORIOS
// ----------------------------------------------------------------------------
