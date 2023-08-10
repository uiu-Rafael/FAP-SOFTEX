let nomes = ["Rafael", "Luisa", "Bruno", "Pedro", "Ana", "Roberto", "Lucas", "João", "Carol", "Hermano"]
let idades = [22, 24, 23, 23, 21, 21, 24, 22, 20, 21]
let cores = ["Verde", "Amarelo", "Vermelho", "Roxo", "Rosa", "Vermelho", "Azul", "Preto", "Branco", "Azul"]

console.log(nomes)
console.log(idades)
console.log(cores)
for(let i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}, idade: ${idades[i]}, cor favorita: ${cores[i]}`)
}

cores.splice(0, 1, "Cinza")
idades.splice(2, 1, 20)

console.log(nomes)
console.log(idades)
console.log(cores)
for(let i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}, idade: ${idades[i]}, cor favorita: ${cores[i]}`)
}// Mudei cor favorita de Rafael e a idade de Bruno.


