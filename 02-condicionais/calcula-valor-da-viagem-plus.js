/* Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:

    1 Preço do etanol;
    2 Preço do gasolina;
    3 O tipo de combustível que está no seu carro;
    4 Gasto médio de combustível do carro por KM;
    5 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
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
