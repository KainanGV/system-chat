import express from 'express';
import './database'

const app = express();

app.get('/', (request, response) => {
    response.json("Olá NLW 05")
})

app.post('/', (request, response) => {

})

app.listen(8080, () => console.log("Ta rodando"))