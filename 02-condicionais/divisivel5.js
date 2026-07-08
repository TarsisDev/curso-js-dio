const numero = 0;

const numeroDivPor5 = numero % 5 === 0;

if (numero === 0) {
  console.log("O Numero é inválido!");
} else if (numeroDivPor5) {
  console.log("sim");
} else {
  console.log("nao");
}
