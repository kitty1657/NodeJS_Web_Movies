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
    let id = req.query.id

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

const handleCreateNewUser = async (req,res)=>{
    let message = await userService.createNewUser(req.body)
    console.log(message)
    return res.status(200).json(message)
}

const handleEditUser = async (req,res)=>{
    let data = req.body
    let message = await userService.updateUserData(data)
    console.log(message)
    return res.status(200).json(message)
}

const handleDeleteUser = async (req,res)=>{
    if(!req.body.userID){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters'
        })
    }
    let message = await userService.deleteUser(req.body.userID)
    console.log(message)
    return res.status(200).json(message)
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser
}