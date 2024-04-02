import actorService from '../services/actorService';

const handleGetAllActors = async (req,res)=>{
    let id = req.query.id
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            actors:[]
        })
    }

    let actors = await actorService.getAllActors(id)
    
    return res.status(200).json({
        errCode: 0,
        actors
    })
}

module.exports = {
    handleGetAllActors: handleGetAllActors
}