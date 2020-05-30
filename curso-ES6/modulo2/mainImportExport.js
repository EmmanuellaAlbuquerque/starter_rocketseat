// Webpack Server: Serviço que vai nós disponibilizar
// uma forma de se trabalhar com vários arquivos js
// na aplicação. além de arquivos json, css, imagens
// e todo esse código, vai ser convertido em um único
// arquivo bundle.js com todas as informações

// precisa utilizar o mesmo nome do arquivo
import { soma, sub } from './funcoes';

// export default
// não precisa utilizar o mesmo nome do arquivo
// ou usar 'as'
import soma2 from './soma';
import somaFunction from './soma';

console.log(soma(1, 2))
console.log(sub(4, 2))
console.log(soma2(1, 2))
console.log(somaFunction(1, 2))

// para alterar o nome do export, sem ser default
// precisa-se usar o 'as'
import { soma as somaFunction2 } from './funcoes';

console.log(somaFunction2(5, 5))

// pode-se exportar uma função default e uma função
// normal do mesmo arquivo
import mult, { div } from './funcoes';
console.log(mult(5, 5))
console.log(div(5, 5))

// Importando tudo
import * as funcoes from './funcoes';

console.log(funcoes)
console.log(funcoes.soma(10, 10))
console.log(funcoes.sub(10, 10))
