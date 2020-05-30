// variaveis de escopo
function teste(x) {
    let y = 2

    if (x > 5){
        let y = 4
        
        console.log(x, y)
    }
}

teste(10)
console.log(y)

// constantes
// mutar::-> mutação |V|
const usuario = { nome: 'Diego' }
usuario.nome = 'Cleiton'
console.log(usuario)

//---------------------------------

// reatribuir |X|
const valor = 1
valor = 3

