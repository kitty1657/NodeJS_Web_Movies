import genreService from '../services/genreService';

const handleGetAllGenres = async (req,res)=>{
    let id = req.query.id
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            genres:[]
        })
    }

    let genres = await genreService.getAllGenres(id)
    
    return res.status(200).json({
        errCode: 0,
        genres
    })
}

const handleCreateNewGenre = async (req,res)=>{
    let message = await genreService.createNewGenre(req.body)
    console.log(message);
    return  res.status(200).json(message)
}

const handleEditGenre = async (req,res)=>{
    let data  = req.body
    let message = await genreService.editGenre(data)
    console.log(message)
    return res.status(200).json(message)
}

const handleDeleteGenre = async(req,res)=>{
    if(!req.body.genreID){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters'
        })
    }
    let message = await genreService.deleteGenre(req.body.genreID)
    return res.status(200).json(message)
}

const handleSearchGenre = async (req, res) => {
    try {
        const keyword = req.query.keyword;

        const genres = await genreService.searchGenre(keyword);

        return res.status(200).json({
            errCode: 0,
            genres
        });
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            errMessage: 'Internal server error'
        });
    }
};

module.exports = {
    handleGetAllGenres,
    handleCreateNewGenre,
    handleEditGenre,
    handleDeleteGenre,
    handleSearchGenre
};
