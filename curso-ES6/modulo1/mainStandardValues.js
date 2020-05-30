// Valores padrão 
// para os parâmetros das funções

// ANTES:
function soma1(a, b) {
    return a + b
}

// return NaN
console.log(soma1(1))
console.log(soma1())

// DEPOIS:
function soma2(a = 0, b = 0) {
    return a + b
}

console.log(soma2(1))
console.log(soma2())

// COM ARROW FUNCTION
const soma3 = (a = 5, b = 5) => a + b

console.log(soma3(1))
console.log(soma3())
