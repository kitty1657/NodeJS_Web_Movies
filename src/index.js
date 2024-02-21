import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/index";
const cors = require("cors");

require("dotenv").config();
const app = express();

const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
};

app.use(cors(corsOptions));
// config
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
