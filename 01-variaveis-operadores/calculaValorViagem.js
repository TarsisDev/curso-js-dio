/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3 -Distância em KM da viagem;
*/
const precoCombustivel = 6.65;
const distanciaKM = 100;
const litrosKm = 10;

const litrosConsumidos = distanciaKM / autonomiaCarro;
const valorGasto = litrosConsumidos * precoGasolina;
console.log(valorGasto.toFixed(2));
