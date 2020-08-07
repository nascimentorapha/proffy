import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get('/users', () => {
    return response.json();
})

app.listen(3333);