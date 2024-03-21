import express from "express"
import homeController from "../controllers/homeController";
import userController from '../controllers/userController';
const router = express.Router();

const initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage)
    router.get('/crud',homeController.getCRUD)
    router.post('/api/login',userController.handleLogin)
    router.get('/api/get-all-users',userController.handleGetAllUsers)
    router.post('/api/create-new-user',userController.handleCreateNewUser)
    router.put('/api/edit-user',userController.handleEditUser)
    router.delete('/api/delete-user',userController.handleDeleteUser)
    router.get('api/user-role',userController.handleGetAllUserRole)

    return app.use('/',router);
}

module.exports = initWebRoutes;