const prompt = require("prompt-sync")(); 

const data = prompt("digite a data no formato dd/mm/aaaa: ");

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const [dia, mes, ano] = data.split("/");

console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
