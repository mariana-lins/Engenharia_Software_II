const prompt = require("prompt-sync")(); 

const num1 = parseFloat(prompt("primeiro número: "));
const operacao = prompt("soma ou subtração? ").toLowerCase();
const num2 = parseFloat(prompt("segundo número: "));

let resultado;

if (operacao === 'soma') {
    resultado = num1 + num2;
} else if (operacao === 'subtração') {
    resultado = num1 - num2;
} else {
    console.log("inválido!");
    return; 
}

console.log(`o resultado é: ${resultado}`);
