import movieService from '../services/movieService';

const handleGetAllMovies = async (req,res)=>{
    let id = req.query.id
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            movies:[]
        })
    }

    let movies = await movieService.getAllActors(id)
    return res.status(200).json({
        errCode: 0,
        movies
    })
}

const handleCreateNewMovie = async (req,res)=>{

    let message = await movieService.createNewMovie(req.body)
    return  res.status(200).json(message)
}

const handleEditMovie = async (req,res)=>{
    let data  = req.body
    let message = await movieService.editMovie(data)
    console.log(data)
    return res.status(200).json(message)
}

const handleDeleteMovie = async(req,res)=>{
    if(!req.body.movieID){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters'
        })
    }
    console.log(req.body.movieID)
    let message = await movieService.deleteMovie(req.body.movieID)
    return res.status(200).json(message)
}

module.exports = {
    handleGetAllMovies: handleGetAllMovies,
    handleCreateNewMovie: handleCreateNewMovie,
    handleEditMovie: handleEditMovie,
    handleDeleteMovie: handleDeleteMovie
}