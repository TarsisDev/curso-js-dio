/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação:
Média menor que 5, reprovação;
Média entre 5 e 7, recuperação; I
Média acima de 7, passou de semestre;
*/
const precoGasolina = 6.65;
const precoEtanol = 4.95;
const distanciaKM = 100;
const autonomiaCarro = 10;
const tipoCombustivel = "Gasolina";

const litrosConsumidos = distanciaKM / autonomiaCarro;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
