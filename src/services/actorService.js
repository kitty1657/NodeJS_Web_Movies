import db from '../models/index';

const getAllActors = (actorID)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let actors = ''
            if(actorID === 'ALL'){
                actors = await db.actor.findAll()
            }
            if(actorID && actorID !== 'ALL'){
                actors = await db.actor.findOne({
                    where: {id: actorID}
                })
            }
            console.log(actors)
            resolve(actors)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllActors: getAllActors
}
