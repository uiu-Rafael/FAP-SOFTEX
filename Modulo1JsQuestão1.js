const pessoa = {
    nome: "Rafael", // Tipo String
    salario: 20000.99, // Tipo Número (Number) 
    idade: 22, // Tipo Número (Number) 
    possuiDiploma: true // Tipo Booleano (Boolean) 
}
  
console.log(typeof(pessoa.nome))
console.log(typeof(pessoa.salario))
console.log(typeof(pessoa.idade))
console.log(typeof(pessoa.possuiDiploma))

console.log("Nome: " + pessoa.nome)
console.log("Salário: R$" + pessoa.salario)
console.log("Idade: " + pessoa.idade + " anos")
console.log("Possui diploma: " + (pessoa.possuiDiploma ? "Sim" : "Não"))
  