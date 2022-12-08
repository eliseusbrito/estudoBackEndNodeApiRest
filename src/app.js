//import express from "express"
const express = require("express");
const db = require("./config/dbConnect.js");
const indexRoutes = require('./routes/routes');// carrega as rotas

db.on("erro", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log('Conexão com o Banco realizada com sucesso')
})

const app = express();

app.use(express.json());

app.use('/bff', indexRoutes);

//export default app
module.exports = app;