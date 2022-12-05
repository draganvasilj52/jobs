const express = require('express')
const jobController = require('../controllers/jobController')
const router = express.Router()

router.get('/', jobController.getAllJobs)
router.post('/create', jobController.createJob)
router.get('/search', jobController.searchJob)

module.exports = router
