const prompt = require("prompt-sync")(); 

const data = prompt("digite a data no formato dd/mm/aaaa: ");

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const [dia, mes, ano] = data.split("/").map(Number);

const dataObj = new Date(ano, mes - 1, dia);

if (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
) {
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
} else {
    console.log("data inválida!");
}