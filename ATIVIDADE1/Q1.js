const prompt = require("prompt-sync")();

const nome = prompt("Seu nome: ");
const alturaCm = parseFloat(prompt("Altura em cm: "));
const peso = parseFloat(prompt("Peso em kg: "));

if (alturaCm <= 0 || peso <= 0) {
    console.log("Erro");
    return;
}

const altura = alturaCm / 100;
const imc = peso / (altura * altura);

let classificacao = "";
if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc < 17) {
    classificacao = "Baixo peso grave";
} else if (imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

console.log(`\n${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.\n`);
