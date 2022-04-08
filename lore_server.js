import cors from 'cors';
import express from 'express';
import {getChampFromDB} from './controllers/getChampFromDB.js';
import knex from 'knex';

const app = express();

app.use(cors())
app.use(express.json())

export const db = knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'postgres',
    password : '4494postgres',
    database : 'loreDatabase'
    }
});

  

app.listen(3000, ()=>

{
    console.log("Running")
})

app.post('/', (req, res)=>{

    getChampFromDB(req,res)
    res.end('Post process finished')
   
    }
)