const prompt = require("prompt-sync")(); 

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let operacao = prompt("Digite a operação (soma ou subtração): ").toLowerCase();
let num2 = parseFloat(prompt("Digite o segundo número: "));

let resultado;

if (operacao === 'soma') {
    resultado = num1 + num2;
} else if (operacao === 'subtração') {
    resultado = num1 - num2;
} else {
    console.log("Operação inválida!");
    return; 
}

console.log(`O resultado é: ${resultado}`);
