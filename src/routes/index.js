import express from "express"
import homeController from "../controllers/homeController";
const router = express.Router();

const initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage)
    router.get('/bach',(req,res)=>{
        return res.send("Hello World!!!")
    })
    return app.use('/',router);
}

module.exports = initWebRoutes;