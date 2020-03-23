const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento: 'Ola Mundo!',
        eu: 'Andrey'
    });
});

app.listen(3333);