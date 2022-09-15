const express = require('express');
const router = express.Router()
const Controller = require('../controllers/doctorController')

router.get('/checkUpList',Controller.checkUp) // nampilin data pasien yang checkup,diurutin dari yg terbaru

router.get('/userList',Controller.userList)

router.get('/userList/:userId/detail',Controller.userDetail)

router.get('/add',Controller.addMedicine) //nambahin obat 

router.post('/add',Controller.saveMedicine)


module.exports = router