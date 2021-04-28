/**
 * Você foi contratado para desenvolver um trabalho: um serviço em que as pessoas poderão usar um estúdio profissional
 * para gravar seus vídeos para o YouTube com máxima qualidade. O serviço ganha dinheiro por meio de um sistema de
 * assinaturas e de um bônus calculado por uma porcentagem sobre o faturamento que o canal do cliente teve
 * ao longo do ano.

   Sua tarefa é criar um algoritmo que receba o tipo de assinatura do cliente, além de seu faturamento anual, e calcule
   e exiba qual o valor do bônus que o cliente deve pagar a vocês. A tabela abaixo mostra a porcentagem aplicada de
   acordo com cada nível de assinatura:

   Basic -> 30%
   Silver -> 20%
   Gold -> 10%
   Platinum -> 5%
 */

const assinaturaInput = document.getElementById("assinatura");
const faturamentoInput = document.getElementById("faturamento_anual");
const botao = document.getElementById("botao");

function calcularBonus() {
  const index = assinaturaInput.selectedIndex;
  const faturamento = faturamentoInput.value;

  const porcentagem = calcularPorcentagem(index);

  const bonus = (faturamento * porcentagem) / 100;

  const layout = `
  
  <h3>Você deverá pagar: R$${bonus}</h3>
  
  `;

  const result = document.getElementById("result");

  result.innerHTML = layout;
}

function calcularPorcentagem(index) {
  if (index === 0) return 30;
  if (index === 1) return 20;
  if (index === 2) return 10;
  if (index === 3) return 5;
}
