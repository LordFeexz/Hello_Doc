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
        UserProfile.findAll({
            include: User
        })
            .then(register => {
                res.render('register', { register })
            })
            .catch(err => {
                res.send(err)
            })
        
    }

    static saveData(req,res){
        const { fullName, address, email, age, phone} = req.body
        UserProfile.create({ fullName, age, email, phone, address, UserId })
            .then(() => {
                return 
            })
            .catch((err) => {
                if (err.name === "SequelizeValidationError") {
                    const errors = err.errors.map((el) => {
                        return el.message
                    })
                }
            })
    }

    static medicineList(req,res){
        Medicine.findAll()
            .then(medicines => {
                res.render('medicines', { medicines })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req,res){
        const idReq = req.params.id
        Medicine.destroy({
            where: {
                id: +idReq
            }
        })
            .then(res.redirect('/medicine'))
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller