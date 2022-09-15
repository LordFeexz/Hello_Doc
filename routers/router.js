const express = require('express');
const router = express.Router()
const Controller = require('../controllers/indexController')
const user = require('./userRouter')
const doctor = require('./doctorRouter')

router.get('/',Controller.index)

router.use('/user',user)

router.use('/doctor',doctor)

module.exports = router