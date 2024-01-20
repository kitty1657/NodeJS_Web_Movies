import express from "express"
import bodyParser from "body-parser"
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/index'
require('dotenv').config()
const app = express();

// config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app)
initWebRoutes(app)

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})