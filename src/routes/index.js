import express from "express"
import userController from '../controllers/userController';
import actorController from '../controllers/actorController';
import genreController from '../controllers/genreController';
const router = express.Router();

const initWebRoutes = (app)=>{
    router.post('/api/login',userController.handleLogin)

    // * User
    router.get('/api/get-all-users',userController.handleGetAllUsers)
    router.post('/api/create-new-user',userController.handleCreateNewUser)
    router.put('/api/edit-user',userController.handleEditUser)
    router.delete('/api/delete-user',userController.handleDeleteUser)
    router.get('api/user-role',userController.handleGetAllUserRole)

    // * Actor
    router.get('/api/get-all-actors',actorController.handleGetAllActors)
    router.post('/api/create-new-actor',actorController.handleCreateNewActor)
    router.put('/api/edit-actor',actorController.handleEditActor)
    router.delete('/api/delete-actor',actorController.handleDeleteActor)

    // * Category
    router.get('/api/get-all-genre',genreController.handleGetAllGenres)
    router.post('/api/create-new-genre',genreController.handleCreateNewGenre)
    router.put('/api/edit-genre',genreController.handleEditGenre)
    router.delete('/api/delete-genre',genreController.handleDeleteGenre)

    return app.use('/',router);
}

module.exports = initWebRoutes;