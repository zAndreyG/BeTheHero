const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
* Tipos de parâmetros:

* Query Params: Parâetros nomeados enviados na rota após "?" (Filtros, Paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Params: Corpo da requisição, utilizado para criar ou alterar recursos
*/