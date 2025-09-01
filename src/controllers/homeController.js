const connection = require('../config/database');
const { getAllUsers, getUserById,updateUserById, deleteUserById } = require('../services/CRUDService');
const getHomepage = async (req, res) => {

    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })// x <= y
}
const getABC = (req, res) => {
    res.send('check ABC')
}
const getvanduong2704 = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //     console.log('email=:', email, 'name=', name, 'city=', city);
    //     connection.query(
    //         `INSERT INTO Users (email,name,city)
    // VALUES (?,?,?)`, [email, name, city], 
    // function (err, results) { 
    //     res.send('Created user succed !')
    // }
    //      );
    let [results, fields] = await connection.promise().query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email, name, city]
    );
    // console.log(">>> check results:",results);
    res.send(' cccreated user succeed!!!')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')

}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    //console.log(">>> req.params:: ", req.params, userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city,userId);
    res.redirect('/');
    //res.send(' updated user succeed!!!')
}
// INSERT INTO Users (email,name,city)
// VALUES ('test','erik va vanduong2704','hocmon');
    const postDeleteUser = async(req,res)=>{
        const userId = req.params.id;
        let user = await getUserById(userId);

        res.render('delete.ejs', { userEdit: user })
    }
    const postHandleRemoveUser =async (req,res) => {
        const id = req.body.userId;
       await deleteUserById(id);
        res.redirect('/');
    }
module.exports = {

    getHomepage,
    getABC,
    getvanduong2704,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}