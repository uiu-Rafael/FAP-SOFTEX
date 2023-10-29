// Classe Carro
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca
      this.modelo = modelo
      this.ano = ano
    }
  
    iniciar() {
      console.log("O carro está ligado.")
    }
  
    parar() {
      console.log("O carro está desligado.")
    }
  
    acelerar(velocidade) {
      console.log(`Acelerando a ${velocidade} km/h.`)
    }
}
  
// Classe Livro
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
  
    abrir() {
      console.log("O livro foi aberto.")
    }
  
    ler(pagina) {
      console.log(`Lendo a página ${pagina}...`)
    }
    
    fechar() {
      console.log("O livro foi fechado.")
    }
  
}
  
// Classe Conta Bancária
class ContaBancaria {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.titular = titular
    }
  
    depositar(quantia) {
      this.saldo += quantia
      console.log(`Depósito de ${quantia} realizado. Novo saldo: ${this.saldo}`)
    }
  
    sacar(quantia) {
      if (this.saldo >= quantia) {
        this.saldo -= quantia
        console.log(`Saque de ${quantia} realizado. Novo saldo: ${this.saldo}`)
      } else {
        console.log("Saldo insuficiente.")
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo disponível: ${this.saldo}`)
    }
}
  
// Classe Redes Sociais
class RedeSocial {
    constructor(usuario, seguidores, publicacoes) {
      this.usuario = usuario
      this.seguidores = seguidores
      this.publicacoes = publicacoes
    }
  
    postar(mensagem) {
      this.publicacoes.push(mensagem)
      console.log("Nova publicação: " + mensagem)
    }
  
    seguir(usuario) {
      console.log(`Seguindo ${usuario}`)
    }
  
    visualizarPerfil() {
      console.log(`Usuário: ${this.usuario}, Seguidores: ${this.seguidores}`)
    }
}
  
// Instanciando objetos
const meuCarro = new Carro("Toyota", "Corolla", 2020)
const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1000)
const minhaConta = new ContaBancaria("12345", 1000, "Pedro")
const minhaRedeSocial = new RedeSocial("Rafael", 500, ["Hoje é um ótimo dia!", "Novas fotos de férias."])
  
// Métodos e atributos de meuCarro
console.log("Métodos e atributos do Carro:");
meuCarro.iniciar();
meuCarro.acelerar(100);
meuCarro.parar();
console.log("Marca do Carro: " + meuCarro.marca);
console.log("Modelo do Carro: " + meuCarro.modelo);
console.log("Ano do Carro: " + meuCarro.ano);

// Métodos e atributos de meuLivro
console.log("\nMétodos e atributos do Livro:");
meuLivro.abrir();
meuLivro.ler(10);
meuLivro.fechar();
console.log("Autor do Livro: " + meuLivro.autor);
console.log("Número de Páginas do Livro: " + meuLivro.paginas);
console.log("Título do Livro: " + meuLivro.titulo);

// Métodos e atributos de minhaConta
console.log("\nMétodos e atributos da Conta Bancária:");
console.log("Número da Conta: " + minhaConta.numeroConta);
console.log("Saldo Inicial: " + minhaConta.saldo);
console.log("Titular da Conta: " + minhaConta.titular);
minhaConta.depositar(200);
minhaConta.sacar(50);
minhaConta.consultarSaldo();

// Métodos e atributos de minhaRedeSocial
console.log("\nMétodos e atributos da Rede Social:");
console.log("Nome de Usuário: " + minhaRedeSocial.usuario);
console.log("Número de Seguidores: " + minhaRedeSocial.seguidores);
console.log("Publicações: " + minhaRedeSocial.publicacoes.join(", "));
minhaRedeSocial.postar("Nova postagem na Rede Social");
minhaRedeSocial.seguir("amigo123");
minhaRedeSocial.visualizarPerfil();

  