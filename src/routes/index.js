import express from "express"
import homeController from "../controllers/homeController";
import userController from '../controllers/userController';
const router = express.Router();

const initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage)
    router.get('/bach',(req,res)=>{
        return res.send("Hello World!!!")
    })
    router.get('/crud',homeController.getCRUD)
    router.get('/get-user',homeController.getUser)
    router.post('/post-crud',homeController.postCRUD)
    router.get('/edit-user',homeController.editUser)
    router.post('/put-crud',homeController.putCRUD)
    router.get('/delete-crud',homeController.deleteCRUD)
    router.post('/api/login',userController.handleLogin)
    return app.use('/',router);
}

module.exports = initWebRoutes;