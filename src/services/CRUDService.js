const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

import db from "../models/index";

let createNewUser = async (data) => {
	console.log(data);
	return new Promise(async (resolve, reject) => {
		try {
			const hashPasswordFromLib = await hashUserPassword(data.password);
			await db.user.create({
				email: data.email,
				password: hashPasswordFromLib,
				fullname: data.fullName,
				gender: data.gender === "1" ? true : false,
				phonenumber: data.phoneNumber,
				roleid: data.roleID,
			});
			resolve("Oke");
		} catch (error) {
			console.error("Error hashing password:", error);
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

const getAllUser = (req, res) => {
	return new Promise(async (resolve, reject) => {
        try {
            const users = db.user.findAll({
                raw: true
            });
            resolve(users)
        } catch (error) {
            reject(error)
        }
    });
};

const getUserByID = (id)=>{
	return new Promise(async(resolve,reject)=>{
		try {
			let user = await db.user.findOne({
				where: {userID: id},
				raw: true
			})

			if(user){
				resolve(user)
			}else{
				resolve([])
			}
		} catch (error) {
			reject(error)
		}
	})
}

const updateUserData = (data)=>{
	return new Promise (async(resolve,reject)=>{
		try {
			console.log("User ID:", data.id); 
			let user = await db.user.findOne({ 
				where: {userID: data.id},
			})
			if(user){
				user.fullName = data.fullName
				user.phoneNumber = data.phoneNumber 
				user.gender = data.gender
				await user.save()

				let allUsers = await db.user.findAll()
				resolve(allUsers)
			}else{
				resolve()
			}
		} catch (error) {
			reject(error)
		}
	})
}

const deleteUserByID = (UserID)=>{
	return new Promise(async(resolve,reject)=>{
		try {
			let user = await db.User.findOne({
				where: {UserID: UserID}, 
			})
			if(user){
				await user.destroy();
				console.log("User deleted successfully");
			}
			resolve()
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = {
	createNewUser: createNewUser,
    getAllUser: getAllUser,
	getUserByID: getUserByID,
	updateUserData: updateUserData,
	deleteUserByID: deleteUserByID
};
