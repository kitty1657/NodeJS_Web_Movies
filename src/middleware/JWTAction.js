const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJWT = (payload) => {
	let key = process.env.JWT_SECRET;
	let token = null;
	try {
		token = jwt.sign(payload, key);
	} catch (error) {
		console.log("====================================")
		console.log(error);
		console.log("====================================");
	}
	return token;
};

const verifyToken = (token) => {
	let key = process.env.JWT_SECRET;
	let data = null;
	try {
        let decoded = jwt.verify(token,key)
        data = decoded
    } catch (error) {
        console.log(error)
    }
    return data;
};
const checkUserJWT = (req,res,next)=>{
	let cookies = req.cookies
	console.log(cookies)
}

module.exports = {
	createJWT,
	verifyToken,
	checkUserJWT
};
