const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

const faseHtml = document.getElementById("fase");
const points = document.getElementById("pontos");

const dir = "./images";

class ClassNave {
  constructor() {
    this.x = 350;
    this.y = 150;
    this.image = dir + "/nave-cima.png";
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

  detectColision() {
    if (
      this.x + 60 > Asteroid.x &&
      this.x < Asteroid.x + 30 &&
      this.y + 60 > Asteroid.y &&
      this.y < Asteroid.y + 30
    ) {
      return true;
    }

    return false;
  }
}

class ClassAsteroid {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = dir + "/asteroid.png";
  }

  random() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
  }

  drawAsteroid() {
    const imagem = new Image();
    imagem.src = this.image;
    ctx.drawImage(imagem, this.x, this.y);
  }

  cleanCanva() {
    ctx.clearRect(this.x, this.y, 30, 30);
  }

  configAsteroid() {
    this.random();

    this.drawAsteroid();

    setTimeout(() => {
      this.cleanCanva();
    }, 1000);
  }
}

class Keyboard {
  static ArrowUp() {
    Nave.removeSpaceShip();

    if (Nave.y > 0) {
      Nave.image = dir + "/nave-cima.png";
      Nave.y -= 10 * Game.fase;
      return true;
    }
    return false;
  }

  static ArrowDown() {
    Nave.removeSpaceShip();

    if (Nave.y < 300) {
      Nave.image = dir + "/nave-baixo.png";
      Nave.y += 10 * Game.fase;
      return true;
    }
    return false;
  }

  static ArrowRight() {
    Nave.removeSpaceShip();

    if (Nave.x < 691) {
      Nave.image = dir + "/nave-direita.png";
      Nave.x += 10 * Game.fase;
      return true;
    }
    return false;
  }

  static ArrowLeft() {
    Nave.removeSpaceShip();

    if (Nave.x > 0) {
      Nave.image = dir + "/nave-esquerda.png";
      Nave.x -= 10 * Game.fase;

      return true;
    }
    return false;
  }

  static handleKeyDown(event) {
    const keyPressed = event.key;
    const move = Keyboard[keyPressed];

    if (move) {
      move();
    }
  }
}

class Game {
  static fase = 1;
  static fps = this.fase / 3;
  static points = 0;
  static penalidade = true;

  static wichFase() {
    if (Game.points >= 100) this.fase = 2;
    if (Game.points >= 200) this.fase = 3;
  }
}

const Nave = new ClassNave();

const Asteroid = new ClassAsteroid();

const asteroidInterval = setInterval(() => {
  Asteroid.configAsteroid();
}, 1010);

const naveInterval = setInterval(() => {
  putInfo();
  if (!Nave.hit) {
    window.onkeydown = Keyboard.handleKeyDown;

    const move = Nave.drawSpaceship();

    if (move) moveTime();
  }

  const colision = Nave.detectColision();

  if (colision) {
    gameover();
  }
}, 10);

function moveTime() {
  Game.penalidade = false;

  setTimeout(() => {
    Game.penalidade = true;
  }, 3000);
}

const counter = setInterval(() => {
  Game.points += 10;
  Game.wichFase();
}, 1000);

const penalidade = setInterval(() => {
  if (Game.penalidade) {
    Game.points -= 20;
  }
}, 3000);

function putInfo() {
  faseHtml.innerHTML = `Fase ${Game.fase}`;
  points.innerHTML = `Pontos: ${Game.points}`;
}

function gameover() {
  Nave.hit = true;
  ctx.clearRect(0, 0, 800, 400);

  ctx.font = "40px Helvetic";

  alert("Game Over");

  clearInterval(naveInterval);
  clearInterval(asteroidInterval);
  clearInterval(counter);
}
