// Rest e Spread: se ainda não acoplado ao babel
// precisa-se instala-los como plugins
// essa parte encontra-se no passa-a-passo.txt

// Manipulado valores dentro de vetores e objetos:

// REST: pegar o resto das propriedades

// REST em Desestruturação
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

// REST e Desestruturação em vetores
const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

// REST em parâmetros de funções
function soma(...params) {
    // operações com arrays
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 3, 4))

// SPREAD: faz o papel de propagar, isto é, repassar as 
// informações de um objeto ou de um array para outra 
// estrutura de dados

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2]

console.log(arr3)

// com obj
const usuario1 = {
    nome: 'Diego',
    idade: 23, 
    empresa: 'Rocketseat'
}

// Como um objeto não pode ter 2 propriedades iguais,
// sobrepoe o nome existente pelo novo
const usuario2 = { ...usuario1, nome: 'Gabriel' }

console.log(usuario2)
