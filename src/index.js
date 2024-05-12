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

// //test
// createJWT();
// let decodedData = verifyToken(
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmFjaCIsInBob25lIjoiMDM0NjMzMTk2OCIsImlhdCI6MTcwODc3NDAxNH0.cN-kZ8dxvP2aZKmMenhxW4yWE3Y6pEw4Tf-qAyj9tCI"
// );
// console.log(decodedData)

viewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
