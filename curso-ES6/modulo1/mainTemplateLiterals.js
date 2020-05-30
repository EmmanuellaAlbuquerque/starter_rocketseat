// Template Literals: manipulando variáveis dentro
// de strings

// ANTES
const nome = "Diego"
const idade = 23

console.log('SEM TEMPLATE:', 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos')

// DEPOIS
console.log('COM TEMPLATE:', `Meu nome é ${nome} e tenho ${idade} anos`)