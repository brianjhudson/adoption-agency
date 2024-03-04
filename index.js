// TODO: Make a connection to a database
const express = require('express');
const connectToDb = require('./db');

const app = express();

app.get('/', async (req, res, next) => {
    return res.json({message: 'Welcome to the Pet Adoption Agency.'});
});

app.get('/animal-types', async (req, res, next) => {
    const client = await connectToDb();
    const {rows} = await client.query('SELECT * FROM animal_types;')
    const strippedData = rows.map((row) => row.type_name);
    client.end()
    return res.json(strippedData);
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