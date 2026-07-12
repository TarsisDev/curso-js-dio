/*function calculaIdade(idade) {
  if (idade < 18) {
    console.log("É menor de idade");
  } else {
    console.log("É maior de idade");
  }
}
*/

function calculaIdade(idade) {
  if (idade < 18) {
    return "É menor de idade";
  } else {
    return "É maior de idade";
  }
}
console.log(calculaIdade(10));
