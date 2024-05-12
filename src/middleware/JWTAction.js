const jwt = require('jsonwebtoken');
require('dotenv').config();

const createJWT = (payload) => {
	let key = process.env.JWT_SECRET;
	let token = null;
	try {
		token = jwt.sign(payload, key);
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
	return token;
};

const verifyToken = (token) => {
	let key = process.env.JWT_SECRET;
	let data = null;
	try {
		let decoded = jwt.verify(token, key);
		data = decoded;
	} catch (error) {
		console.log(error);
	}
	return data;
};
const checkUserJWT = (req, res, next) => {
	let cookies = req.cookies;
	if (cookies && cookies.jwt) {
		let token = cookies.jwt;
		let decoded = verifyToken(token);
		req.user = decoded
		console.log(req.user)
		decoded
			? next()
			: res.status(401).json({
					errCode: -1,
					data: '',
					errMessage: 'Not authenticated the user',
			});
	} else {
		return res.status(401).json({
			errCode: -1,
			data: '',
			errMessage: 'Not authenticated the user',
		});
	}
};

const checkUserPermission = (req,res,next)=>{
	let email = req.user.email;
	let roleID = req.user.roleID
	if(!email && roleID !== 1){
		return res.status(403).json({
			errCode: -1,
			data: '',
			errMessage: `You don't have permission to access`
		})
	}else{
		next()
	}
}

module.exports = {
	createJWT,
	verifyToken,
	checkUserJWT,
	checkUserPermission
};
