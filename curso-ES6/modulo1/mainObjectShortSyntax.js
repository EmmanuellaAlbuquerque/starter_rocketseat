// Object Short Syntax: Sintaxe curta de objeto
// quando o nome da propriedade é igual ao nome 
// da variável dentro do objeto, pode-se deixar 
// apenas 1 deles.

const nome = 'Diego'
const idade = 23
// ANTES
const usuario1 = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat'
}
console.log(usuario1)

// DEPOIS
const usuario2 = {
    nome,
    idade,
    empresa: 'Rocketseat'
}
console.log(usuario2)
