const button = document.getElementById("botao");
const enviar = document.getElementById("botaoEnviar");

button.addEventListener("click", mostrarTexto);

function mostrarTexto() {
  colocartexto("Ímpares", 1);

  button.style.display = "none";
  enviar.style.display = "block";

  const caixa = document.getElementById("nota");

  caixa.style.display = "block";
}

enviar.addEventListener("click", lancarNotas);

// criar arrays
const alunosPar = [];
const alunosImpar = [];

for (let i = 1; i <= 50; i++) {
  const aluno = {
    id: i,
    nota: 0,
  };

  if (i % 2 === 0) {
    alunosPar.push(aluno);
  } else {
    alunosImpar.push(aluno);
  }
}

let indexImpar = 0;
let indexPar = 0;

function lancarNotas() {
  if (indexImpar < 25) {
    impar();
  } else {
    par();
  }
}

function impar() {
  let aluno;
  if (indexImpar == 1) {
    aluno = alunosImpar[0];
  } else {
    aluno = alunosImpar[indexImpar - 1];
  }

  const idAluno = aluno.id;

  colocartexto("Ímpares", idAluno);

  atribuirNota(aluno);

  indexImpar++;
}

function par() {
  const idAluno = alunosPar[indexPar].id;

  colocartexto("Pares", idAluno);

  indexPar++;
}

function colocartexto(parOuImpar, index) {
  const layout = `
   <h1>Você está digitando as notas dos alunos ${parOuImpar}.</h1>
   <br />
   <h2>Por favor, digite a nota do aluno ${index}</h2>
   `;

  const texto = document.getElementById("texto");

  texto.innerHTML = layout;
}

function atribuirNota(aluno) {
  const notaAtribuida = document.getElementById("nota").value;

  aluno.nota = Number(notaAtribuida);

  console.log(aluno);
}
