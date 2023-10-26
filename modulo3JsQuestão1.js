// Função tradicional sem parâmetros
function funcaoTradicional() {
    console.log("Esta é uma função tradicional sem parâmetros.");
}
  
// Função tradicional com parâmetros e retorno
function soma(a, b) {
    return a + b;
}
  
// Arrow function com parâmetros e retorno
const multiplica = (x, y) => x * y;
  
// Utilizando as funções
funcaoTradicional(); // Chama a função sem parâmetros
const funcaoTradicional_Com_Parametros = soma(3, 4); // Chama a função de soma com parâmetros
const arrowFunction = multiplica(2, 5); // Chama a arrow function de multiplicação
  
console.log("Resultado da soma: " + funcaoTradicional_Com_Parametros);
console.log("Resultado da multiplicação: " + arrowFunction);
  