// Configurando axios: biblioteca que nos dará acesso
// a uma API para trabalhar com requisições assíncronas
// protocolos HTTP, outras apis com servidores back-end
// etc

// Traalhando com requisições assíncronas
// Async/await + Axios, pois as funções do axios retornam
// promises, por isso pode-se usar o async e await.
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response)
        } catch (err) {
            console.warn('Erro na API')
        }

    }
}

Api.getUserInfo('emmanuellaalbuquerque')
