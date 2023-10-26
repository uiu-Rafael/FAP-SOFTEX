// Definindo o objeto Banco
const Banco = {
    conta: "83948-6",
    saldo: 1000.00,
    tipoDeConta: "Conta Corrente",
    agencia: "3645",
  
    // Método para buscar o saldo atual
    buscarSaldo: function() {
      return this.saldo
    },
  
    // Método para fazer um depósito
    deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor
        return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`
      } else {
        return "O valor do depósito deve ser maior que zero."
      }
    },
  
    // Método para fazer um saque
    saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor
        return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`
      } else {
        return "Saldo insuficiente ou valor de saque inválido."
      }
    },
  
    // Método para obter o número da conta
    numeroDaConta: function() {
      return this.conta
    }
}
  
// Exemplos de uso
console.log("Saldo atual: R$" + Banco.buscarSaldo())
console.log(Banco.deposito(500))
console.log(Banco.saque(200))
console.log("Número da conta: " + Banco.numeroDaConta())
  