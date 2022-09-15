const {User,Medicine,UserProfile,Disease,CheckUp} = require("../models")

class Controller{

    static checkUp(req,res){
        CheckUp.findAll()
        .then(data => res.render('doctor/checkUpList',{ data }))
        .catch(err => res.send(err))
    }

    static userList(req,res){
        User.findAll({
            where:{
                role:'user'
            }
        })
        .then(user => res.render('doctor/userList',{user}))
        .catch(err => res.send(err))
    }

    static userDetail(req,res){
        User.findAll({
            include:UserProfile,
            where:{
                role :'user'
            }
        })
        .then(user => res.render('doctor/userDetail',{user}))
        .catch(err => res.send(err))
    }

    static addMedicine(req,res){
        res.render('doctor/addMedicine')
    }

    static saveMedicine(req,res){
        const {name,price} = req.body
        Medicine.create({
            name:name,
            price:price
        })
        .then(() => res.redirect(`/`))
        .catch(err => res.send(err))
    }
}
module.exports = Controller