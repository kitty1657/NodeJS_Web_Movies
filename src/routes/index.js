import express from "express"
import userController from '../controllers/userController';
import actorController from '../controllers/actorController';
import genreController from '../controllers/genreController';
import directorController from '../controllers/directorController';
import movieController from '../controllers/movieController';
import countryController from '../controllers/countryController';
const router = express.Router();

const initWebRoutes = (app)=>{
    router.post('/api/login',userController.handleLogin)

    // * User
    router.get('/api/get-all-users',userController.handleGetAllUsers)
    router.post('/api/create-new-user',userController.handleCreateNewUser)
    router.put('/api/edit-user',userController.handleEditUser)
    router.delete('/api/delete-user',userController.handleDeleteUser)
    router.get('api/user-role',userController.handleGetAllUserRole)
    router.get('/api/get-search-user',userController.handleSearchUser)

    // * Actor
    router.get('/api/get-all-actors',actorController.handleGetAllActors)
    router.post('/api/create-new-actor',actorController.handleCreateNewActor)
    router.put('/api/edit-actor',actorController.handleEditActor)
    router.delete('/api/delete-actor',actorController.handleDeleteActor)
    router.get('/api/get-search-actor',actorController.handleSearchActor)

    // * Director
    router.get('/api/get-all-directors',directorController.handleGetAllDirectors)
    router.post('/api/create-new-director',directorController.handleCreateNewDirector)
    router.put('/api/edit-director',directorController.handleEditDirector)
    router.delete('/api/delete-director',directorController.handleDeleteDirector)
    router.get('/api/get-search-director',directorController.handleSearchDirector)

    // * Category
    router.get('/api/get-all-genre',genreController.handleGetAllGenres)
    router.post('/api/create-new-genre',genreController.handleCreateNewGenre)
    router.put('/api/edit-genre',genreController.handleEditGenre)
    router.delete('/api/delete-genre',genreController.handleDeleteGenre)
    router.get('/api/get-search-genre',genreController.handleSearchGenre)
    

    // * Movie
    router.get('/api/get-all-movies',movieController.handleGetAllMovies)
    router.post('/api/create-new-movie',movieController.handleCreateNewMovie)
    router.put('/api/edit-movie',movieController.handleEditMovie)
    router.delete('/api/delete-movie',movieController.handleDeleteMovie)

    // * Movie Genre
    router.get('/api/get-all-moviegenres',movieController.handleGetAllMovieGenres)

    // * Movie Actor
    router.get('/api/get-all-movieactors',movieController.handleGetAllMovieActors)

    // * Movie Director
    router.get('/api/get-all-moviedirectors',movieController.handleGetAllMovieDirectors)


    // * Country
    router.get('/api/get-all-countries',countryController.hanldeGetAllCountries)

    return app.use('/',router);
}

module.exports = initWebRoutes;