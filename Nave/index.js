var canvas = document.getElementById("minha-tela");
var ctx = canvas.getContext("2d");
//definir o ínicio do desenho
var x = 0;
var y = 150;
//a função gameloop é chamada aqui
requestAnimationFrame(gameloop);

window.onkeydown = pressionaTecla;
function pressionaTecla(tecla) {
  if (tecla.keyCode == 38) {
    y = y - 20; //diminuir y tem o efeito de subida
  }
  if (tecla.keyCode == 40) {
    y = y + 20; //aumentar y tem o efeito de descer
  }
  if (tecla.keyCode == 39) {
    x = x + 20; //aumentar o x tem o efeito de ir para a direita
  }
  if (tecla.keyCode == 37) {
    x = x - 20; //diminuir o x tem o efeito de ir para a esquerda
  }
}
function gameloop() {
  desenharQuadrado(x, y);
  //chama novamente o ciclo da animação
  requestAnimationFrame(gameloop);
}
function desenharQuadrado(pX, pY) {
  ctx.clearRect(0, 0, 800, 400); //antes de fazer o desenho é preciso limpar o canvas
  ctx.fillStyle = "#00F";
  ctx.fillRect(pX, pY, 100, 100);
}
