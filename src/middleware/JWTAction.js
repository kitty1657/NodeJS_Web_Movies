const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJWT = () => {
	let payload = { name: "Bach", phone: "0346331968" };
	let key = process.env.JWT_SECRET;
	let token = null;
	try {
		token = jwt.sign(payload, key);
		console.log(token);
	} catch (error) {
		console.log("====================================");
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

module.exports = {
	createJWT,
	verifyToken,
};
