const express = require('express');
const router = express.Router()
const Controller = require('../controllers/userController')

router.get('/checkup',Controller.checkUp) // utk nampilin form checkup

router.post('/checkup',Controller.saveCheckUp) // menambahkan form

router.get('/checkup/:id/detail',Controller.result) // menampilkan detail checkup dari id

router.get('/buy/:MedicineId',Controller.buy) //beli obat, stock -1

router.post('/buy/:MedicineId', Controller.updateStock)

router.get('/payment',Controller.payment) // nampilin struk pembayaran

module.exports = router