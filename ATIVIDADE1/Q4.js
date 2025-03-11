const prompt = require("prompt-sync")();

const codigo = prompt("código do funcionário: ");
const horasTrabalhadas = Number(prompt("horas trabalhadas: "));
const turno = prompt("turno (M - Matutino, V - Vespertino, N - Noturno): ").toUpperCase();
const categoria = prompt("categoria (F - Funcionário, G - Gerente): ").toUpperCase();
const salarioMinimo = Number(prompt("salário mínimo estadual: "));

const valoresHora = {
    "G": { "M": 0.04, "V": 0.04, "N": 0.04 },
    "F": { "M": 0.01, "V": 0.01, "N": 0.02 }
};

const valorHora = salarioMinimo * (valoresHora[categoria]?.[turno] || 0);
const salarioInicial = horasTrabalhadas * valorHora;
const auxilio = salarioInicial < 800 ? salarioInicial * 0.25 :
                salarioInicial <= 1200 ? salarioInicial * 0.20 :
                salarioInicial * 0.15;

const salarioFinal = salarioInicial + auxilio;

console.log("\nFolha de Pagamento");
console.log(`Código: ${codigo}`);
console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Valor da hora trabalhada: R$ ${valorHora.toFixed(2)}`);
console.log(`Salário inicial: R$ ${salarioInicial.toFixed(2)}`);
console.log(`Auxílio-alimentação: R$ ${auxilio.toFixed(2)}`);
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);