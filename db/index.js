// const pg = require('pg');
const {Client} = require('pg');


const connectToDb = async () => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'adoption_shelter',
        user: 'brian',
        password: '',
    });
    console.log('I am now trying to connect to the database...')
    
    try {
        await client.connect();
        return client;
    } catch (e) {
    
    }

}

module.exports = connectToDb;