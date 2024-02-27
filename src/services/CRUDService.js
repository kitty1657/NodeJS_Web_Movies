const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

import db from "../models/index";

let createNewUser = async (data) => {
	console.log(data);
	return new Promise(async (resolve, reject) => {
		try {
			const hashPasswordFromLib = await hashUserPassword(data.Password);
			await db.User.create({
				email: data.Email,
				password: hashPasswordFromLib,
				fullname: data.FullName,
				gender: data.Gender === "1" ? true : false,
				phonenumber: data.PhoneNumber,
				roleid: data.RoleID,
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
            const users = db.User.findAll({
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
			let user = await db.User.findOne({
				where: {UserID: id},
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
			let user = await db.User.findOne({ 
				where: {UserID: data.id},
			})
			if(user){
				user.FullName = data.FullName
				user.PhoneNumber = data.PhoneNumber 
				user.Gender = data.Gender
				await user.save()

				let allUsers = await db.User.findAll()
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
