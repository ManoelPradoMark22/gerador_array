function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tamanho = 10;
var valorMin = -10;
var valorMax = 40;

do {
  tamanho = parseInt(window.prompt("Quantos dados você quer receber? (TAMANHO DO ARRAY): "));
  if (tamanho<=0) {
    alert("O tamanho tem que ser um número inteiro positivo!");
  }
} while((tamanho<=0) || !tamanho);

alert("ATENÇÃO! A seguir você terá que digitar o valor MÍNIMO e MÁXIMO do intervalo das temperaturas. Esses valores serão inclusos no resultado! Eles devem ser INTEIROS, mas não se preocupe! O array de temperaturas retornado vai ser composto por dados REAIS!");
valorMin = parseInt(window.prompt("Digite o valor mínimo INTEIRO do array de temperatura: "));

do {
  valorMax = parseInt(window.prompt("Digite o valor máximo INTEIRO do array de temperatura: "));
  if (valorMax<=valorMin) {
    alert("O valor máximo deve ser maior que o valor mínimo!");
  }
} while(valorMax<=valorMin);


document.write("-----------------------------------------------------<br><br>");
document.write("Quanditade solicitada: " + tamanho + "<br>");
document.write("Números entre " + valorMin + " e " + valorMax + ": <br><br>");
document.write("-----------------------------------------------------<br><br>");
document.write("Copie a lista de dados abaixo: <br>");

for (let i=0; i<tamanho; i++) {
  let numAntesVirgula = getRandomIntInclusive(valorMin, valorMax);
  let numDepoisVirgula = 0;

  if (numAntesVirgula==valorMax) {
    numDepoisVirgula = 0;
  } else {
    numDepoisVirgula = getRandomIntInclusive(0, 99);
  }

  let stringNumero = (numAntesVirgula + '.' + numDepoisVirgula);
  
  if(i<(tamanho-1)) {
    document.write(stringNumero + ",");
  } else {
    document.write(stringNumero);
  }
}

