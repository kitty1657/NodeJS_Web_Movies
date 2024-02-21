import db from '../models/index';
import userService from '../services/userService';
const handleLogin = async (req,res)=>{
    const email = req.body.Email
    console.log(email)
    const password = req.body.Password
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

module.exports = {
    handleLogin: handleLogin
}