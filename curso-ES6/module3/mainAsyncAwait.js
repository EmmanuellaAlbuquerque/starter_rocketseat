
// ANTES:--------------------------------------------- 
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

minhaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err);
    })
//-----------------------------------------------------

// DEPOIS:---------------------------------------------
// ES8: Async/await: Assincronísmo
async function executaPromisse() {
    // espera a primeira p/ executar a próxima
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromisse()

//-----------------------------------------------------

// A partir do momento que define-se uma async
// function, automaticamente essa função virá
// uma promisse. Então, conseguimos também, 
// esperar pelo resultado da executaPromisse()
// usando o .then() ou o await na frente
// ex.:
executaPromisse().then()
// - await executaPromisse()
// Porém, vale lembrar que nunca se pode usar
// o await na frente de uma promise se não
// estiver dentro de uma função com async

// COM ARROW FUNCTION
const executaPromisse2 = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromisse2()
