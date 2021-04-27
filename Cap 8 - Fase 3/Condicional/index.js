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



window.onload = {
  assinaturaInput = document.getElementById("assinatura"),
  faturamentoInput = document.getElementById("faturamento_anual"),
  botao = document.getElementById("botao"),
};

function calcularBonus(assinatura, faturamento) {
  const porcentagem = calcularBonus(assinatura);

  console.log((faturamento * porcentagem) / 100);

  return (faturamento * porcentagem) / 100;
};

function calcularPorcentagem(assinatura) {
  if (assinatura === 0) return 30;
  if (assinatura === 1) return 20;
  if (assinatura === 2) return 10;
  if (assinatura === 3) return 10;
}
