const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express()
// Permite o envio de dados no formato de JSON
app.use(express.json())

// pode-se definir quais domínios permitir acesso
// além de configurações de segurança
app.use(cors())

// Iniciando o DataBase
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);
requireDir('./src/models')

// Rotas: http://localhost:3001/api
app.use('/api', require('./src/routes'))

app.listen(3001)
