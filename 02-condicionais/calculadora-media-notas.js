/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação:
Média menor que 5, reprovação;
Média entre 5 e 7, recuperação; I
Média acima de 7, passou de semestre;
*/
const nota1 = 6.65;
const nota2 = 3.95;
const nota3 = 100;
const media = (nota1 + nota2 + nota3) / 3;

if (media > 10) {
  console.log(
    "Sua pontuação é de:",
    media.toFixed(2),
    "e exedeu o valor maximo permitido, converse com o seu professor para regularizar a sua pontuação!",
  );
} else if (media <= 5) {
  console.log(
    media.toFixed(2),
    "Você não atingiu a media, estude um pouco mais e boa sorte na proxima",
  );
} else if (media <= 7) {
  console.log(
    media.toFixed(2),
    "Você está de recuperação, ainda da para passar!",
  );
} else {
  console.log(media.toFixed(2), "passou de ano, parabens!");
}
