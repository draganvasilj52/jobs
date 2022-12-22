const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  {
    technologies: [String],
    location: [String],
    experience: [String],
    applicationDeadline: String,
    jobTitle: String,
    companyName: String,
    companyId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Companie',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', jobSchema)
