function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject){

        if (idade > 18) {
            resolve(true)
        } else {
            reject(false)
        }
    
    })
}

// → 2 segundos para executar
setTimeout(executePromisse, 2000);

function executePromisse(){

    checaIdade(20)
        .then(function(response) {
            console.log("Maior que 18");
            console.log(response);
        })
        .catch(function(error) {
            console.log("Menor que 18");
            console.log(error);
        });

}