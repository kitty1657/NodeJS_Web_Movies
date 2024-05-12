import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/index";
import cookieParser from 'cookie-parser';
const cors = require("cors");

require("dotenv").config();
const app = express();

const corsOptions = {
	origin: process.env.REACT_URL,
	credentials: true,
};

app.use(cors(corsOptions));
// config
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// config cookie-parser
app.use(cookieParser())

viewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
