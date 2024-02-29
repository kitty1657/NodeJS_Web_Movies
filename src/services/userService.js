import db from "../models/index";
import user from "../models/user";
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const handleUserLogin = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			const userExist = await checkUserEmail(email);
			const userData = {};
			if (userExist) {
				const user = await db.user.findOne({
					where: { email: email },
					raw: true,
					attributes: ["email", "password", "roleID"],
				});

				if (user) {
					const check = bcrypt.compareSync(password, user.password);
					console.log(check);
					if (check) {
						userData.errCode = 0;
						userData.errMessage = "Oke";
						delete user.password;
						userData.user = user;
					} else {
						userData.errCode = 3;
						userData.errMessage = "Wrong password";
					}
				} else {
					userData.errCode = 2;
					userData.errMessage = `User's not found`;
				}
			} else {
				userData.errCode = 1;
				userData.errMessage = `Your's email isn't exist in your system.`;
			}
			resolve(userData);
		} catch (error) {
			reject(error);
		}
	});
};

const checkUserEmail = (userEmail) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.user.findOne({
				where: { email: userEmail },
			});
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};

const getAllUsers = (userID) => {
	return new Promise(async(resolve, reject) => {
		try {
			let users = ''
			if(userID === 'ALL'){
				users = await db.user.findAll({
					attributes: {
						exclude: ['password'],
					}
				})
			}
			if(userID && userID !== "ALL"){
				users = await db.user.findOne({
					where: {userID: userID},
					attributes: {
						exclude: ['password'],
					},
				})
			}
			console.log(users)
			resolve(users)
		} catch (error) {
			reject(error)
		}
	});
};

module.exports = {
	handleUserLogin: handleUserLogin,
	getAllUsers: getAllUsers
};
