const button = document.getElementById("botao");

button.onclick = () => {
  const input = document.getElementById("input");
  const minutes = input.value;

  const factorial = makeFactorial(minutes);

  showPassword(factorial);
};

function makeFactorial(number) {
  var fatorial = 1;

  var i = number;
  while (i != 1) {
    fatorial *= i;
    i--;
  }

  return fatorial;
}

function showPassword(factorial) {
  const layout = `
  <h1>Sua Senha é: LIBERDADE${factorial}</h1>
  `;

  const result = document.getElementById("result");

  result.innerHTML = layout;
}
