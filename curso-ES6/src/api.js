import axios from 'axios';

// Configurando axios: endereço pré-configurado
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;
