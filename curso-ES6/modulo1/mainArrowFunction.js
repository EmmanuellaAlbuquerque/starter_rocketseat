const arr = [1, 3, 4, 5, 6]

// ex de uso.: callback
// arrow function:: ambiente de função anônima:
const newArr1 = arr.map((item) => {
    return item * 2
})

console.log(newArr1)
//--------------------------------------------------

// quando a função recebe apenas 1 parâmetro, pode-se
// remover os parânteses por volta dele
const newArr2 = arr.map(item => {
    return item * 2
})

console.log(newArr2)
//--------------------------------------------------

// quando a função retorna simplesmente uma informação
// quando não são várias linhas, ou um corpo de função
// pode remover o return e as chaves
const newArr3 = arr.map(item => item * 2)

console.log(newArr3)
//--------------------------------------------------

// Constante recebe uma função
// function teste()
const teste1 = () => {
    return 'teste'
}

console.log(teste1())

// desse tipo, dá certo para 'string', número,
// mas não para objeto
// a não ser que tenha o return
const teste2 = () => [1, 2, 3]

console.log(teste2())

// undefined -> pois a chave tb é utilizada no corpo
// da função, para usar dessa forma é preciso 1
// parênteses por fora
const teste3 = () => { nome: 'Emmanuella' }

console.log(teste3())

const teste5 = () => ({ nome: 'Emmanuella' })

console.log(teste5())

// obj
const teste4 = () => { 
    return  { nome: 'Emmanuella' }
}

console.log(teste4())
//--------------------------------------------------

