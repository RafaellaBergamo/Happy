import express from 'express';

import './database/connection';

const app = express ();

app.use(express.json());


app.get('/users/:id', (request, response) => {
   return response.json({message: 'Hello World'});
})

app.listen(3333); //porta para visualizar o back localhost:3333