import * as readline from 'readline-sync';

// 1. Implemente o código do slide de número 6.
console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');
console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');
console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');

// 2. Implemente o código do slide de número 15.
function criarFrases() {
  console.log('Estudar é muito bom');
  console.log('Revisão é a mãe do aprendizado');
  console.log('Paciência e persistência');
}

criarFrases();
criarFrases();
criarFrases();

// 3. Implemente o código do slide de número 24.
function soma(num1: number, num2: number) {
  console.log(num1 + num2);
}

soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

// 4. Implemente o código do slide de número 33.
function soma1(num1: number, num2: number): number {
  return num1 + num2;
}

const teste1: number = soma1(10, 15);
console.log(teste1);

const teste2: number = soma1(10, 20) + soma1(30, 50);
console.log(teste2);

console.log(soma1(50, 50));

// 5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
function soma2(a: number, b: number): number {
  return a + b;
}

console.log(soma2(2, 5));

// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.
function isPar(numInt: number): boolean {
  if (parseInt(numInt.toString()) % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPar(3));
console.log(isPar(6));
console.log(isPar(12));

// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.
function media(nota1: number, nota2: number, nota3: number): string {
  const media = (nota1 + nota2 + nota3) / 3;
  return `A média das três notas é igual a: ${media.toFixed(2)}`;
}

console.log(media(8, 6.5, 10));

// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.
function imc(peso: number, altura: number): string {
  const indMassaCorp = peso / (altura ** 2);
  return `O imc baseado nesses parametros é igual a: ${indMassaCorp.toFixed(2)}`;
}

console.log(imc(74, 1.8));

// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
function calcularDesconto(valorProd: number, percDesconto: number): string {
  return `Desconto aplicado de ${(valorProd * percDesconto) / 100} reais`;
}

console.log(calcularDesconto(100, 10));

/* 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes faixas de renda:
   a. Até R$ 1.903,98: isento
   b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
   c. De R$ 2.826,66 até R$ 3.751,05: alíquota de 15%
   d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
   e. Acima de R$ 4.664,68: alíquota de 27,5%
*/
function calcularImpostoRenda(salarBruto: number): string {
  let impostoDeRenda: number;

  if (salarBruto <= 1903.98) {
    impostoDeRenda = 0;
  } else if (salarBruto >= 1903.99 && salarBruto <= 2826.65) {
    impostoDeRenda = (salarBruto * 0.075) - 142.80;
  } else if (salarBruto >= 2826.66 && salarBruto <= 3751.05) {
    impostoDeRenda = (salarBruto * 0.15) - 354.80;
  } else if (salarBruto >= 3751.05 && salarBruto <= 4664.68) {
    impostoDeRenda = (salarBruto * 0.225) - 636.13;
  } else {
    impostoDeRenda = (salarBruto * 0.275) - 869.36;
  }

  return `O imposto de renda a partir do salário bruto fornecido é igual a ${impostoDeRenda.toFixed(2)}`;
}

console.log(calcularImpostoRenda(5200));

// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.
function calcularMediaArredondada(listaDeNum: number[]): void {
  let soma = 0;
  for (let i = 0; i < listaDeNum.length; i++) {
    soma += listaDeNum[i];
  }
  console.log(`A média aritmética desses números é ${Math.round(soma / listaDeNum.length)}`);
}

calcularMediaArredondada([10, 2, 3, 1]);

// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.
function contarDigitosParesImpares(numInte: number): string {
  const string = numInte.toString();
  const arrstr = string.split('');
  let qntdPar = 0;
  let qntdImpar = 0;

  for (let i = 0; i < arrstr.length; i++) {
    if (parseInt(arrstr[i]) % 2 === 0) {
      qntdPar++;
    } else {
      qntdImpar++;
    }
  }
  return `A quantidade de dígitos pares é ${qntdPar}, e a quantidade de dígitos ímpares é ${qntdImpar}.`;
}

console.log(contarDigitosParesImpares(872));
console.log(contarDigitosParesImpares(971286));

// 13. Crie uma função chamada "calcularMediaAlunos" that receives a list of students, where each student is represented by an object with the attributes "name" and "grade". The function should calculate and return the average of all students' grades.
function calcularMediaAlunos(listAlun: { nome: string; nota: number }[]): string {
  let soma1 = 0;
  for (const aluno of listAlun) {
    let valorNota = aluno.nota;
    soma1 += valorNota;
  }
  let media = soma1 / listAlun.length;
  return `A média das notas de todos os alunos é ${media.toFixed(2)}`;
}

let listaDeAlunos = [
  { nome: 'Rafael', nota: 8 },
  { nome: 'Bianca', nota: 6 },
  { nome: 'Leo', nota: 9 },
];

let lista = calcularMediaAlunos(listaDeAlunos);
console.log(lista);

// 14. Create a function called "calcularIdade" that takes a person's "birth year" as a parameter and returns their current age.
function calcularIdade(nascimento: number): string {
  const date = new Date();
  const ano = date.getFullYear();
  return `A idade dessa pessoa, a partir do parametro fornecido, é ${ano - nascimento} anos`;
}

console.log(calcularIdade(2001));

// 15. Create a function called "gerarTabuada" that takes a "number" as a parameter and displays the multiplication table of that number from 1 to 10 in the console.
function gerarTabuada(numero: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}

gerarTabuada(8);

// 16. Write a function called "advinheNumero" that randomly generates an integer between 1 and 100. Then, allow the user to enter guesses to guess the number. The function should give the user hints if the correct number is higher or lower than the guess. When the user guesses correctly, display a congratulations message and the number of attempts used.
function advinheNumero(): void {
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  while (!acertou) {
    let palpite = parseInt(readline.question('Digite um número entre 1 e 100:'));
    tentativas++;

    if (palpite === numero) {
      acertou = true;
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    } else if (palpite < numero) {
      console.log('O número correto é maior. Tente novamente.');
    } else {
      console.log('O número correto é menor. Tente novamente.');
    }
  }
}

advinheNumero();

// 17. Create a function called "verificarPropriedade" that takes an object and a string as parameters and returns true if the object has the property with the name specified in the string, and false otherwise.
function verificarPropriedade(objeto: object, string: string): boolean {
  if (string in objeto) {
    return true;
  } else {
    return false;
  }
}

const obj1 = { oi: 'oi' };

console.log(verificarPropriedade(obj1, 'oi'));
console.log(verificarPropriedade(obj1, 'ola'));

// 18. Create a function called "calcularPrecoProduto" that receives the "cost value" of a product, the desired profit margin (as a percentage), and the "freight value" as parameters. The function should calculate and return the selling price of the product, considering that the selling price is equal to the cost plus the profit margin and the freight value.
function calcularPrecoProduto(valorDeCusto: number, margemDeLucro: number, valorDoFrete: number): string {
  const precoDeVenda = (valorDeCusto * margemDeLucro) / 100 + valorDoFrete + valorDeCusto;
  return `O preço de venda do produto vai ser R$${precoDeVenda}`;
}

console.log(calcularPrecoProduto(100, 5, 12));

// 19. Write a function that accepts an array of strings and prints them, one per line, in a rectangular frame. For example, the list ["Hello", "World", "in", "a", "frame"] is printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********
function retanguloPorPalavra(array: string[]): void {
  let maiorPalavra = '';

  for (const element of array) {
    if (maiorPalavra.length < element.length) {
      maiorPalavra = element;
    }
  }
  console.log('*'.repeat(maiorPalavra.length + 4));
  const espaco = ' ';

  for (const element of array) {
    const numeroDeEspacos = maiorPalavra.length - element.length;
    console.log(`* ${element}${espaco.repeat(numeroDeEspacos)} *`);
  }
  console.log('*'.repeat(maiorPalavra.length + 4));
}

const palavras = [
  'Emersson',
  'Carlos',
  'Rinaldo',
  'Israel',
  'Aristóteles',
  'Marcelo',
  'Isis',
  'Nara',
  'Bil',
];

const palavras2 = ['Marcelo', 'Isis', 'Nara', 'Bil'];

retanguloPorPalavra(palavras);
retanguloPorPalavra(palavras2);

// 21. Create a function called "arrayDeStringsMaiorQue5" that receives an array of strings as a parameter and returns a new array containing only the strings with more than 5 characters.
function arrayDeStringsMaiorQue5(arrayString: string[]): string[] {
  let novoArray: string[] = [];
  for (const elemento of arrayString) {
    if (elemento.length > 5) {
        novoArray.push(elemento);
      }
    }
    return novoArray;
  }
  
  const arrayStrings = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];
  const resultado = arrayDeStringsMaiorQue5(arrayStrings);
  console.log(resultado); // Deve imprimir ['banana', 'cherry', 'elderberry']
  
  // 22. Escreva uma função chamada "calcularFatorial" que recebe um número inteiro como parâmetro e retorna o fatorial desse número.
  function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  const fatorialDe5 = calcularFatorial(5);
  console.log(`O fatorial de 5 é ${fatorialDe5}`);
  
  // 23. Crie uma função chamada "inverterString" que recebe uma string como parâmetro e retorna a mesma string, mas com os caracteres em ordem inversa.
  function inverterString(texto: string): string {
    return texto.split('').reverse().join('');
  }
  
  const textoOriginal = 'OpenAI';
  const textoInvertido = inverterString(textoOriginal);
  console.log(textoInvertido); // Deve imprimir "IAepO"
  
  // 24. Elabore uma função chamada "encontrarPalavras" que recebe uma string e uma palavra como parâmetros e retorna a quantidade de vezes que a palavra aparece na string.
  function encontrarPalavras(texto: string, palavra: string): number {
    const palavras = texto.split(' ');
    let contagem = 0;
  
    for (const p of palavras) {
      if (p === palavra) {
        contagem++;
      }
    }
  
    return contagem;
  }
  
  const textoParaBuscar = 'Esta é uma string de exemplo com uma palavra repetida: exemplo';
  const palavraAlvo = 'exemplo';
  const vezesEncontradas = encontrarPalavras(textoParaBuscar, palavraAlvo);
  console.log(`A palavra "${palavraAlvo}" foi encontrada ${vezesEncontradas} vezes no texto.`);
  
  // 25. Create a function called "removerElemento" that takes an array and an element as parameters, and returns a new array with all instances of that element removed.
  function removerElemento(arr: any[], elemento: any): any[] {
    return arr.filter((el) => el !== elemento);
  }
  
  const arrayOriginal = [1, 2, 3, 4, 2, 5];
  const elementoParaRemover = 2;
  const novoArray = removerElemento(arrayOriginal, elementoParaRemover);
  console.log(novoArray); // Deve imprimir [1, 3, 4, 5]
  
