const prompt = require("prompt-sync")();

const n1 = Number(prompt("nota da atividade prática: "));
const n2 = Number(prompt("nota da prova do semestre: "));
const n3 = Number(prompt("nota do trabalho teórico: "));

const media = (n1 * 2 + n2 * 5 + n3 * 3) / 10;

const classificacao = media >= 9 ? "A" :
                      media >= 8 ? "B" :
                      media >= 7 ? "C" :
                      media >= 6 ? "D" :
                      media >= 5 ? "E" : "F";

console.log(`Média = ${media.toFixed(2)} | Classificação = ${classificacao}`);
