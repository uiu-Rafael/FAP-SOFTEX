/* utilizei o módulo prompt sync para conseguir usar o prompt no js, 
instalando o gerenciador de pacotes NPM: "npm install prompt-sync" */
const prompt = require("prompt-sync")() 

// Solicita as notas ao usuário
const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))
const nota3 = Number(prompt("Digite a terceira nota: "))

// Calcula a média
const media = (nota1 + nota2 + nota3) / 3

// Exibe a média no console
console.log("A média é:", media)
