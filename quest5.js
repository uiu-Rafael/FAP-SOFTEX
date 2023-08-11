let array = []

array.push(3, 7, 9, 1, 0)

console.log(array)

//----------- Fila -----------

function desenfileirar() { // remove o elemento que está na frente
    if(array.length === 0) {
        return null
    }else {
        return array.shift()
    }
}

desenfileirar()
desenfileirar()
desenfileirar()
desenfileirar()
desenfileirar()
console.log(array) 

//---------- Lista -----------

function remover(elemento) { // remove o elemento que você desejar
    const indice = array.indexOf(elemento) // indice do elemento
    if(indice <= array.length - 1) {
        array.splice(indice, 1)
        return true
    }else {
        return false
    }
}

remover(3)
remover(7)
remover(9)
remover(1)
remover(0)
console.log(array)

//--------- Pilha --------

function desempilhar(elemento) { // remove o elemento do topo da pilha, isto é o ultimo elemento.
    if(array.length === 0) {
        return null
    }else {
        return array.pop()
    }
} 

desempilhar()
desempilhar()
desempilhar()
desempilhar()
desempilhar()
console.log(array)