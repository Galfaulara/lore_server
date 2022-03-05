const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex');

const getChampFromDB = async(req, res) =>{
      
    const NAMES = await db.select('name','title','champ_id','blurb').from('champions');

     const toInsert = await req.body.flatMap((champion) => 
        NAMES.some(dataElement => dataElement.nam === champion.name) ? [] : champion)

        toInsert.flatMap( async (champion) => {
            await db('champions').insert({
            name: champion.name,
            title: champion.title,
            champ_id: champion.id,
            blurb: champion.blurb
            })
        }
        )   


} 

app.use(express.json())

    const db = knex({
        client: 'pg',
        connection: {
        host : '127.0.0.1',
        port: '5432',
        user : 'postgres',
        password : '4494postgres',
        database : 'loreDatabase'
        }
    });

  

    


app.use(cors())

app.listen(3000, ()=>

{
    console.log("Running")
})

app.post('/', (req, res)=>{

    getChampFromDB(req,res)
    
    res.end('Post process finished')
   
   
    }
)

/*

Add to database --> POST = add champions to database

*/
