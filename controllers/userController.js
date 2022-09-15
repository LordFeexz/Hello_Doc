const {User,Medicine,UserProfile,Disease,CheckUp} = require("../models")

class Controller {

    static checkUp(req,res){
        UserProfile.findAll()
            .then(usercheckup => {
                res.render("", { usercheckup })
            })
            .cath(err => {
                res.send(err)
            })
    }

    static saveCheckUp(req,res){
        const { DiseaseId, description, DoctorId, MedicineId} = req.body

        CheckUp.create({
            DiseaseId: +DiseaseId,
            DoctorId: +DoctorId,
            MedicineId: +MedicineId,
            description,
        })
            .then(res.redirect(''))
            .catch(err => {
                res.send(err)
            })
    }

    static result(req,res){
        const checkupId = req.params.id

        CheckUp.findByPk(+checkupId, {
            include: [UserProfile, Medicine, Disease]
        })
            .then(checkUp => {
                res.render('', { checkUp })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static buy(req,res){
        const medsId = req.params.id

        Medicine.findByPk(+medsId)
            .then(meds =>{
                res.render('', { meds } )
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateStock(req, res){

    }

    static payment(req,res){

    }
}
module.exports = Controller