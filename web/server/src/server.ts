import express, { response } from 'express';

const app = express();

app.get('/users', () => {
    return response.json();
})

app.listen(3333);