const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  technologies: [String],
  companyName: String,
  location: [String],
  experience: [String],
  applicationDeadline: String,
  jobTitle: String,
})

module.exports = mongoose.model('Job', jobSchema)
