import {db} from '../lore_server.js'

export const getChampFromDB = async(req, res) =>{
      
    const NAMES = await db.select('name','title','champ_id','blurb').from('champions');

     const toInsert = await req.body.flatMap((champion) => 
        NAMES.some(dataElement => dataElement.name === champion.name) ? [] : champion)

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

