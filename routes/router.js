const express = require('express');
const router = express.Router()
const Controller = require('../controllers/indexController')
const user = require('./userRouter')
const doctor = require('./doctorRouter')

router.get('/',Controller.login)

router.post('/',Controller.verify)

router.get('/register',Controller.register)

router.post('/register',Controller.saveData)

router.get('/medicine',Controller.medicineList)

router.get('/medicine/delete',Controller.delete) //nanti tombol delete nya cuma muncul kalo role nya doctor

router.use('/user',user)

router.use('/doctor',doctor)

module.exports = router