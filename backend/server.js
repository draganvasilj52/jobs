const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jobRoutes = require('./routes/jobRoutes')
const userRoutes = require('./routes/userRoutes')
const companyRoutes = require('./routes/companyRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', jobRoutes)
app.use('/', userRoutes)
app.use('/', companyRoutes)

app.use((req, res, next) => {
  res.status(404).send('Page not found')
})

const CONNECTION_URL =
  'mongodb+srv://draganvasilj:draganvasilj@cluster0.hdf1vjr.mongodb.net/fake'

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(5000)
  })
  .catch(() => {
    console.log('connection to mongoDB failes')
  })
