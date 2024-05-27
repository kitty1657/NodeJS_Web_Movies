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

const handleCreateNewActor = async (req,res)=>{

    let message = await actorService.createNewActor(req.body)
    return  res.status(200).json(message)
}

const handleEditActor = async (req,res)=>{
    let data  = req.body
    let message = await actorService.editActor(data)
    console.log(data)
    return res.status(200).json(message)
}

const handleDeleteActor = async(req,res)=>{
    if(!req.body.actorID){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters'
        })
    }
    console.log(req.body.actorID)
    let message = await actorService.deleteActor(req.body.actorID)
    return res.status(200).json(message)
}

const handleSearchActor = async (req, res) => {
    try {
        const keywords = req.query.keywords;
        const actor = await actorService.searchActor(keywords);

        return res.status(200).json({
            errCode: 0,
            actor
        });
    } catch (error) {
        return res.status(500).json({
            errorCode: 500,
            errorMessage: 'Internal Server error',
        });
    }
};

module.exports = {
    handleGetAllActors: handleGetAllActors,
    handleCreateNewActor: handleCreateNewActor,
    handleEditActor: handleEditActor,
    handleDeleteActor: handleDeleteActor,
    handleSearchActor: handleSearchActor
}