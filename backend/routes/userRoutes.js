const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.post('/auth/signup', userController.signUp)
router.post('/auth/signin', userController.signIn)

module.exports = router
