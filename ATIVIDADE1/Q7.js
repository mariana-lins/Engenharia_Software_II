const prompt = require("prompt-sync")();

const idade = parseInt(prompt("Idade: "));
let faixaEtaria;

if (idade >= 0 && idade < 15) {
    faixaEtaria = "Criança";
} else if (idade >= 15 && idade < 30) {
    faixaEtaria = "Jovem";
} else if (idade >= 30 && idade < 60) {
    faixaEtaria = "Adulto";
} else if (idade >= 60) {
    faixaEtaria = "Idoso";
} else {
    faixaEtaria = "Idade inválida";
}

console.log("Faixa etária: " + faixaEtaria);
