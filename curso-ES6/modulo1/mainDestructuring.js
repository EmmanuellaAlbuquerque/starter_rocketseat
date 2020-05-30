// Desestruturação

// ANTES, sem
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

console.log('nome:', usuario.nome)
console.log('idade:', usuario.idade)
console.log('cidade:', usuario.endereco.cidade)
//----------------------------------------------------

// DEPOIS, com
const { nome, idade, endereco: { cidade } } = usuario

console.log('nome:', nome)
console.log('idade:', idade)
console.log('cidade:', cidade)

//----------------------------------------------------


// USO EM FUNÇÕES

// ANTES
function mostraNome1(usuario) {
    console.log(usuario.nome)
}
mostraNome1(usuario)

// DEPOIS
function mostraNome2({ nome, idade }) {
    console.log(nome, idade)
}
mostraNome2(usuario)

