function pegarMinutosAtual() {
  var timestamp = new Date();
  const minutes = timestamp.getMinutes();

  const fatorialPronto = makeFatorial(minutes);

  pegarSenha(fatorialPronto);

  console.log(fatorialPronto);
}

function makeFatorial(number) {
  var fatorial = 1;

  var i = number;
  while (i != 1) {
    fatorial *= i;
    i--;
  }

  return fatorial;
}

function pegarSenha(fatorial) {
  const layout = `
  <h1>Sua Senha é: LIBERDADE${fatorial}</h1>
  `;

  const senha = document.getElementById("senha");

  senha.innerHTML = layout;
}

pegarMinutosAtual();
setInterval(pegarMinutosAtual, 1000);
