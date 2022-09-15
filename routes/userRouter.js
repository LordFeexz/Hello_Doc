const express = require('express');
const router = express.Router()
const Controller = require('../controllers/userController')

router.get('/checkup',Controller.checkUp) // utk nampilin form checkup

router.post('/checkUp',Controller.saveCheckUp)

router.get('/result',Controller.result) // nampilin hasil checkUp

router.get('/buy/:MedicineId',Controller.buy) //beli obat, stock -1

router.get('/payment',Controller.payment) // nampilin struk pembayaran

module.exports = router