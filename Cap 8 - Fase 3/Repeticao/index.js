/**
 *  Muitos professores preferem adotar modelos diferentes de provas quando dão aulas para turmas muito grandes.
 *  Por essa razão, a escola de inglês JoWell Sant’ana, em que todas as turmas são compostas por 50 alunos, solicitou
 *  que você criasse um sistema capaz de atender ao seguinte requisito: o professor deve digitar primeiro as notas dos 
 *  25 alunos que tem número ímpar na chamada (1, 3, 5, ..., 47, 49) e, depois, as notas dos 25 alunos que tem número par
 *  (2, 4, 6,..., 48, 50). O sistema deve calcular e exibir a média de cada uma das metades da sala e informar,
 *  ao final, qual delas teve a maior nota.

    Há ainda um pedido especial do mantenedor: para que os professores não se confundam ao digitar cada uma das notas,
    deve ser exibida uma mensagem no seguinte padrão:

    VOCÊ ESTÁ DIGITANDO AS NOTAS DOS ALUNOS PARES (ou ímpares, quando for o caso).

    POR FAVOR, INSIRA A NOTA DO ALUNO DE NÚMERO X.
 */

// criar array

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
  const aluno = alunosImpar[indexImpar];

  const idAluno = aluno.id;

  console.log(indexImpar);
  console.log(idAluno);

  if (indexImpar !== 0) {
    colocartexto("Ímpares", idAluno + 2);
    atribuirNota(aluno);

    indexImpar++;
    return;
  }

  colocartexto("Ímpares", idAluno);
  atribuirNota(aluno);

  indexImpar++;
  return;
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
