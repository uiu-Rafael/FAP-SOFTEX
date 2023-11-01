try {
    const prompt = require("prompt-sync")() 

    // Solicitar dois números ao usuário
    var numero1 = parseFloat(prompt("Digite o primeiro número: "))
    var numero2 = parseFloat(prompt("Digite o segundo número: "))
  
    // Verificar se o segundo número é zero
    if (numero2 === 0) {
      throw new Error("Não é possível dividir por zero.")
    }
  
    // Realizar a operação de divisão
    var resultado = numero1 / numero2
  
    // Exibir o resultado
    console.log("\nO resultado da divisão é: " + resultado)
  } catch (error) {
    // Capturar e tratar a exceção
    console.log("\nOcorreu um erro: " + error.message)
  } finally {
    // Este bloco será executado independentemente de ter ocorrido uma exceção ou não
    console.log("\nO código foi executado com sucesso ou com exceção.")
  }
  