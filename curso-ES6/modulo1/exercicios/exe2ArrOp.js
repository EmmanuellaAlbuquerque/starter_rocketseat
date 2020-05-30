const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//---------------------  2.1 -----------------------
const idades = usuarios.map(item => item.idade)
console.log(idades)

//---------------------  2.2 -----------------------
const userRocket = usuarios
    .filter(item => item.empresa === 'Rocketseat'
        && item.idade > 18)

console.log(userRocket)

//---------------------  2.3 -----------------------
const empresa = usuarios
    .find((item) => item.empresa === 'Google')

console.log(empresa)

//---------------------  2.4 -----------------------
const union = usuarios
    .map(item => ({
        nome: item.nome,
        idade: item.idade * 2,
        empresa: item.empresa,
    } 
)).filter(item => item.idade <= 50)

console.log(union)
