const Job = require('../models/job')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    jobs,
  })
}

const createJob = async (req, res) => {
  const { name } = req.body
  const job = new Job({
    name,
  })

  await job.save()

  res.status(201).json({
    job,
  })
}

exports.getAllJobs = getAllJobs
exports.createJob = createJob
