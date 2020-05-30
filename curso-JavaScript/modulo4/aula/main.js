// -------------------------------- AULA PARTE 3 ------------------------------
axios.get('https://api.github.com/users/diego3g')
    // sucesso código 200
    .then(function(response) {
        console.log(response.data.avatar_url)
    })
    // error, avisa erro
    .catch(function(error) {
        console.warn(error)
    })

// -------------------------------- AULA PARTE 2 ------------------------------
// var minhaPromise = function() {
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', 'https://api.github.com/users/diego3g')
//         xhr.send(null)

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else {
//                     reject('Erro na requisição')
//                 }
//             }
//         }
//     })
// }

// /*
// // DESSA FORMA, O JS NÃO ESPERA A PROMISSA CARREGAR, RETORNA PENDING
// // var resultado = minhaPromise()
// // console.log(resultado)
// */

// minhaPromise()
//     // sucesso código 200
//     .then(function(response) {
//         console.log(response)
//     })
//     // error, avisa erro
//     .catch(function(error) {
//         console.warn(error)
//     })


// -------------------------------- AULA PARTE 1 ------------------------------
// // dá acesso a funcionalidade do AJAX
// var xhr = new XMLHttpRequest()

// // Consumindo URL via AJAX
// xhr.open('GET', 'https://api.github.com/users/diego3g')
// xhr.send(null)

// xhr.onreadystatechange = function() {
//     // variável que significa quando a resposta volta 
//     // para gente
//     if (xhr.readyState === 4) {
//         // JSON para array
//         console.log(JSON.parse(xhr.responseText))
//     }
// }

