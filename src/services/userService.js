import db from '../models/index';
// import user from "../models/user";
const bcrypt = require('bcryptjs');
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
					attributes: ['email', 'password', 'roleID'],
				});

				if (user) {
					const check = bcrypt.compareSync(password, user.password);
					console.log(check);
					if (check) {
						userData.errCode = 0;
						userData.errMessage = 'Oke';
						delete user.password;
						userData.user = user;
					} else {
						userData.errCode = 3;
						userData.errMessage = 'Wrong password';
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
	return new Promise(async (resolve, reject) => {
		try {
			let users = '';
			if (userID === 'ALL') {
				users = await db.user.findAll({
					attributes: {
						exclude: ['password'],
					},
				});
			}
			if (userID && userID !== 'ALL') {
				users = await db.user.findOne({
					where: { userID: userID },
					attributes: {
						exclude: ['password'],
					},
				});
			}
			console.log(users);
			resolve(users);
		} catch (error) {
			reject(error);
		}
	});
};

const createNewUser = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkEmail = await checkUserEmail(data.email);
			if (checkEmail === true) {
				resolve({
					errCode: 1,
					errMessage: 'Your email is already in used',
				});
			} else {
				const hashPasswordFromLib = await hashUserPassword(data.password);
				await db.user.create({
					email: data.email,
					password: hashPasswordFromLib,
					fullName: data.fullName,
					address: data.address,
					gender: data.gender === '1' ? true : false,
					phoneNumber: data.phoneNumber,
					roleID: data.roleID,
				});
				resolve({
					errCode: 0,
					errMessage: 'Create success',
				});
			}
		} catch (error) {
			console.error('Error hashing password:', error);
			reject(error);
		}
	});
};

const hashUserPassword = (Password) => {
	return new Promise(async (resolve, reject) => {
		try {
			var hashPassword = bcrypt.hashSync(Password, salt);
			resolve(hashPassword);
		} catch (error) {
			reject(error);
		}
	});
};

const deleteUser = (userID) => {
	return new Promise(async (resolve, reject) => {
		let user = await db.user.findOne({
			where: { userID: userID },
		});
		console.log(user);
		if (!user) {
			resolve({
				errCode: 2,
				errMessage: `The user isn't exist`,
			});
		}
		await db.user.destroy({
			where: { userID: userID },
		});
		resolve({
			errCode: 0,
			errMessage: 'Delete Success',
		});
	});
};

const updateUserData = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			// console.log(data.user)
			if (!data.user.userID) {
				resolve({
					errCode: 2,
					errMessage: 'Missing required parameters',
				});
			} else {
				console.log('User ID:', data.user.userID);
				let user = await db.user.findOne({
					where: { userID: data.user.userID },
					raw: false,
				});
				console.log(1);
				console.log(data.user.email);
				if (user) {
					user.email = data.user.email;
					user.fullName = data.user.fullName;
					user.address = data.user.address;
					user.phoneNumber = data.user.phoneNumber;
					user.gender = data.user.gender;
					user.roleID = data.user.roleID;
					await user.save();
					resolve({
						errCode: 0,
						errMessage: 'Update Success',
					});
				} else {
					resolve({
						errCode: 1,
						errMessage: `User isn't found`,
					});
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};

const getAllUserRole = () => {};

module.exports = {
	handleUserLogin: handleUserLogin,
	getAllUsers: getAllUsers,
	createNewUser: createNewUser,
	updateUserData: updateUserData,
	deleteUser: deleteUser,
};
