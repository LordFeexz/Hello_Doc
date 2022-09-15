const {User,Medicine,UserProfile,Disease,CheckUp} = require("../models")
const bcryptjs = require('bcryptjs')

class Controller{

    static login(req,res){
        res.render('login')
    }

    static verify(req,res){
        const {userName,password} = req.body
        User.findAll({
            where : {
                userName : userName
            }
        })
        .then(user => {
            if(user){
                const validate = bcryptjs.compareSync(password,user.password)
                if(validate){
                    return res.redirect() // blm ada halaman nya
                }
                else{
                    const error = 'invalid data'
                    return res.redirect(`/login?error=${error}`)
                }
            }
        })
        .catch(err => res.send(err))
    }

    static register(req,res){
        res.render('register')
    }

    static saveData(req,res){

    }

    static medicineList(req,res){

    }

    static delete(req,res){

    }
}

module.exports = Controller