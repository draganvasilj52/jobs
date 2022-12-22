const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: String,
  jobIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Job',
    },
  ],
  info: String,
  location: String,
  employees: String,
  experiences: { type: Array, default: [] },
  aboutCompany: String,
})

module.exports = mongoose.model('Companie', companySchema)
