const express = require('express')
const companyController = require('../controllers/companyController')
const router = express.Router()
const authMiddleware = require('../middleware/auth')

router.post('/company', companyController.createCompany)
router.get('/company/:companyName', companyController.getCompany)
router.put(
  '/company/:companyName',
  authMiddleware,
  companyController.createExperience
)

module.exports = router
