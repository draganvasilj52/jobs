const Job = require('../models/job')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    jobs,
  })
}

const createJob = async (req, res) => {
  const details = req.body
  console.log(details)
  const job = new Job({
    ...details,
  })

  await job.save()

  res.status(201).json({
    job,
  })
}

exports.getAllJobs = getAllJobs
exports.createJob = createJob
