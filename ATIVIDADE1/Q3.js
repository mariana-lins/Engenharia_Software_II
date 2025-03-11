const prompt = require("prompt-sync")();

const dist = Number(prompt("distância (km): "));

if (dist <= 0) {
    console.log("Erro");
    return;
}

const qtdPecas = Number(prompt("quantidade de peças: "));

if (qtdPecas <= 0) {
    console.log("Erro");
    return;
}

const regiao = Number(prompt("região (1-Sul, 2-Sudeste, 3-Centro-Oeste): "));

if (![1, 2, 3].includes(regiao)) {
    console.log("Erro");
    return;
}

const rastreamento = prompt("deseja rastreamento? (sim/não): ").toLowerCase() === "sim";
const valorLitroCombustivel = Number(prompt("valor do litro do combustível: "));

if (valorLitroCombustivel <= 0) {
    console.log("Erro");
    return;
}

const precos = { 1: 1.00, 2: 1.20, 3: 1.30 };
const descontos = { 1: 0.10, 2: 0.12, 3: 0.13 };

const precoPeca = precos[regiao];
const desconto = descontos[regiao];

const taxaRastreamento = rastreamento ? 200 : 0;
const freteDistancia = dist * valorLitroCombustivel;

const fretePecas = qtdPecas <= 1000 ? qtdPecas * precoPeca :
    (1000 * precoPeca) + ((qtdPecas - 1000) * precoPeca * (1 - desconto));

const totalFrete = fretePecas + freteDistancia + taxaRastreamento;

console.log(`\nTaxa de rastreamento: R$ ${taxaRastreamento.toFixed(2)}`);
console.log(`Valor do frete pelas peças: R$ ${fretePecas.toFixed(2)}`);
console.log(`Valor do frete por km: R$ ${freteDistancia.toFixed(2)}`);
console.log(`Total do frete: R$ ${totalFrete.toFixed(2)}`);