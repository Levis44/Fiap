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

  drawSpaceship() {
    const imagem = new Image();
    imagem.src = this.image;
    ctx.drawImage(imagem, this.x, this.y);
  }

  removeSpaceShip() {
    ctx.clearRect(this.x, this.y, 60, 60);
  }
}
const Nave = new ClassNave();

class ClassAsteroid {
  constructor() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
  }

  drawAsteroid() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 30, 30);
  }

  cleanCanva() {
    ctx.clearRect(this.x, this.y, 30, 30);
  }
}

class Keyboard {
  static ArrowUp() {
    Nave.removeSpaceShip();

    if (Nave.y > 0) {
      Nave.image = "nave-cima.png";
      Nave.y -= 20;
    }
  }

  static ArrowDown() {
    Nave.removeSpaceShip();

    if (Nave.y < 300) {
      Nave.image = "nave-baixo.png";
      Nave.y += 20;
    }
  }

  static ArrowRight() {
    Nave.removeSpaceShip();

    if (Nave.x < 691) {
      Nave.image = "nave-direita.png";
      Nave.x += 20;
    }
  }

  static ArrowLeft() {
    Nave.removeSpaceShip();

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
var fps = 3;
setInterval(() => {
  const Asteroid = new ClassAsteroid();
  Asteroid.drawAsteroid();

  setTimeout(() => {
    Asteroid.cleanCanva();
  }, 1000);
}, 1000 / fps);

setInterval(() => {
  window.onkeydown = Keyboard.handleKeyDown;

  Nave.drawSpaceship();
}, 10);

// setInterval(() => {
// }, 10);

// requestAnimationFrame(gameloop);
// function gameloop() {
//   window.onkeydown = Keyboard.handleKeyDown;

//   const x = Nave.x;
//   const y = Nave.y;
//   Nave.drawSpaceship(x, y);

//   //chama novamente o ciclo da animação
//   requestAnimationFrame(gameloop);
// }

// ----------------------------------------------------------------------------
// ASTEROIDES ALEATORIOS

// var fps = 1 / 3;
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
// desenharQ();

// ASTEROIDES ALEATORIOS
// ----------------------------------------------------------------------------

// Aparecer asteróide
//
