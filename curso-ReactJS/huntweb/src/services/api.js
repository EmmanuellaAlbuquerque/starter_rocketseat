// Configurações para conexão com serviços externos
// para receber ou enviar dados
import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' })

export default api;
