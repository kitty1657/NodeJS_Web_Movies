import db from '../models/index'
import CRUD from '../services/CRUDService'
const getHomePage = async (req,res)=>{
    try {
        const data = await db.User.findAll()
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

const getCRUD = (req,res)=>{
    return res.render('crud.ejs')
}

const postCRUD = async (req,res)=>{
    let mess = await CRUD.createNewUser(req.body)
    console.log(mess);
    return res.send("post")
}

const getUser = async (req,res)=>{
    const data = await CRUD.getAllUser()
    console.log(data);
    return res.render('dsCRUD.ejs',{
        data: data
    })
    
}

const editUser = async (req,res)=>{
    let userID = req.query.id
    console.log(userID);
    if(userID){
        let userData = await CRUD.getUserByID(userID)
        return res.render('editCRUD.ejs',{
            user: userData
        })
        
    }else{
        return res.send('Không có user nào')
    }
}

const putCRUD = async (req,res)=>{
    let data = req.body
    let allUsers = await CRUD.updateUserData(data)
    return res.render('dsCRUD.ejs',{ 
        data: allUsers
    })
}

const deleteCRUD = async (req, res) => {
    let id = req.query.id;
    console.log('====================================');
    console.log(req.query.id);
    console.log('====================================');
    if (id) {
        await CRUD.deleteUserByID(id);
        return res.send('delete user succeed');
    } else {
        return res.send("ladad");
    }
};

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getUser: getUser,
    editUser: editUser,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
};
