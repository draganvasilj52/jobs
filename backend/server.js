const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jobRoutes = require('./routes/jobRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', jobRoutes)

const CONNECTION_URL =
  'mongodb+srv://draganvasilj:draganvasilj@cluster0.hdf1vjr.mongodb.net/jobs'

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(5000)
  })
  .catch(() => {
    console.log('connection to mongoDB failes')
  })
