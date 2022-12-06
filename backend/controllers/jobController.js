const Job = require('../models/job')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    jobs,
  })
}

const createJob = async (req, res) => {
  const details = req.body

  const job = new Job({
    ...details,
  })

  await job.save()

  res.status(201).json({
    job,
  })
}

const getJob = async (req, res) => {
  const { id } = req.params

  const job = await Job.findById(id)

  res.status(200).json({
    job,
  })
}

const searchJob = async (req, res) => {
  const location = req.query.location
  const technologies = req.query.technologies
  const experience = req.query.experience

  const jobs = await Job.find({
    $or: [
      { location: { $in: location?.split(',') } },
      { technologies: { $in: technologies?.split(',') } },
      { experience: { $in: experience?.split(',') } },
    ],
  })

  res.json({
    jobs,
  })
}

exports.getAllJobs = getAllJobs
exports.createJob = createJob
exports.searchJob = searchJob
exports.getJob = getJob
