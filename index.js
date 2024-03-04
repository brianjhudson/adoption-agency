// TODO: Make a connection to a database
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    return res.json({message: 'Welcome to the Pet Adoption Agency.'});
});

app.get('/animal-types', (req, res, next) => {
    return res.json([]);
})

app.get('/animals', (req, res, next) => {
    return res.json([]);
})

app.get('/adoptable-animals', (req, res, next) => {
    return res.json([]);
})

app.get('/adopted-animals', (req, res, next) => {
    return res.json([]);
})
/*
// Sample endpoints to demonstrate REST express defaults:
    app.get('/animal', () => {});
    app.post('/animal', () => {});
    // app.patch('/animal', () => {});
    app.put('/animal', () => {});
    app.delete('/animal', () => {});
*/


app.listen(3000, () => {
    console.log('Server is now listening.');
})