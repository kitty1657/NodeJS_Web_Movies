import db from '../models/index';
import userService from '../services/userService';

const handleLogin = async (req,res)=>{
    const email = req.body.email
    console.log(email)
    const password = req.body.password
    console.log(password)
    console.log(req.body)
    if(!email || !password){
        return res.status(500).json({
            errCode: "0",
            message: "Missing parameter"
        })
    }

    let userData = await userService.handleUserLogin(email,password)

    console.log(userData)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {} 
    })
}

const handleGetAllUsers = async (req,res)=>{
    let id = req.body.id

    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            users:[]
        })
    }

    let users = await userService.getAllUsers(id)

    return res.status(200).json({
        errCode: 0,
        users
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers
}