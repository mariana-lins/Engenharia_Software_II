const prompt = require("prompt-sync")(); 

let data = prompt("digite a data no formato dd/mm/aaaa: ");

let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let [dia, mes, ano] = data.split("/");

console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
