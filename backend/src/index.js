const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
* Tipos de parâmetros:

* Query Params: Parâetros nomeados enviados na rota após "?" (Filtros, Paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Params: Corpo da requisição, utilizado para criar ou alterar recursos
*/