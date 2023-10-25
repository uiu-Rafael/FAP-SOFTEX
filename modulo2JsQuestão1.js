/* utilizei o módulo prompt sync para conseguir usar o prompt no js, 
instalando o gerenciador de pacotes NPM: "npm install prompt-sync" */
const prompt = require("prompt-sync")() 

// Solicitar entrada do usuário
while(true) {
    const valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    const operador = prompt("Digite o operador (+, -, *, /): ")
    const valor2 = parseFloat(prompt("Digite o segundo valor: "))

    let resultado
    let sobra

    switch (operador) {
        case '+':
            resultado = valor1 + valor2
            console.log(`${valor1} + ${valor2} = ${resultado}`)
            break
        case '-':
            resultado = valor1 - valor2
            console.log(`${valor1} - ${valor2} = ${resultado}`)
            break
        case '*':
            resultado = valor1 * valor2
            console.log(`${valor1} * ${valor2} = ${resultado}`)
            break
        case '/':
            if (valor2 !== 0) {
                resultado = Math.floor(valor1 / valor2)
                sobra = valor1 % valor2

                if (sobra === undefined) {
                    console.log(`${valor1} / ${valor2} = ${resultado}`)
                } else {
                    console.log(`${valor1} / ${valor2} = ${resultado}, Sobra: ${sobra}`)
                }

            } else {
                console.log("Divisão por zero não é permitida.")
            }   
            break
        default:
            console.log("Operador inválido. Use +, -, *, ou /")
    }

    let resposta = prompt("\nQuer fazer uma nova operação?\nsim(s) ou aperte qualquer tecla: ")
    if(resposta == 's') {
        continue
    }else {
        break
    }
}