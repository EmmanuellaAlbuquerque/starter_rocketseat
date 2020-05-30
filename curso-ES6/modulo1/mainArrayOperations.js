// Novas operações com arrays
const arr = [1, 3, 4, 5, 8, 9]
console.log('Dado o array', arr, 'temos:')

// Map: percorrer o vetor e retorna uma nova informação
const newArr1 = arr.map(function(item) {
    return item * 2
})

const newArr2 = arr.map(function(item, index) {
    return item + index
})

console.log('dobro', newArr1)
console.log('valor+index', newArr2)

//-------------------------------------------------------

// Reduce: forma de consumir todo um vetor e
// transformar em uma única informação, variável
// geralmente um número
const sum = arr.reduce(function(total, next) {
    return total + next
})

// com arr = [1, 3, 4, 5, 8, 9]
// 1: total->0, next->1
// 2: total->1, next->3
// 3: total->4, next->4
// 4: total->8, next->5
// 5: total->13, next->8
// 6: total->21, next->9
// 7: total->30, next->.
console.log('soma:',sum)
//-------------------------------------------------------

// Filter: true -> vai estar no novo array, false -> removido
// obrigatóriamente precisa retornar true ou false
const filter = arr.filter(function(item) {
    return item % 2 === 0
})

console.log('pares:', filter)
//-------------------------------------------------------


// Find: Verificar se existe alguma informação dentro do
// array, se consegue encontrar essa informação no array
const find = arr.find(function(item) {
    return item === 100
})

// se achar retorna o valor, se não retorna undefined
console.log('procura:', find)
//-------------------------------------------------------
