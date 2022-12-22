const Job = require('../models/job')
const Companies = require('../models/companies')
const mongoose = require('mongoose')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    jobs,
  })
}

const createJob = async (req, res) => {
  const {
    technologies,
    location,
    experience,
    applicationDeadline,
    jobTitle,
    companyId,
  } = req.body

  let company = await Companies.findById(companyId)

  const job = new Job({
    technologies,
    location,
    experience,
    applicationDeadline,
    jobTitle,
    companyName: company.name,
    companyId,
  })

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await job.save({ session: sess })
    company.jobIds.push(job)
    await company.save({ session: sess })
    await sess.commitTransaction()
  } catch (err) {
    return res.json({ message: 'failed' })
  }

  res.json({ message: 'dobro je' })
}

const getJob = async (req, res) => {
  const { id } = req.params

  const job = await Job.findById(id)

  res.status(200).json({
    job,
  })
}

const getJobsByCompanyId = async (req, res) => {
  const { companyId } = req.params

  const jobs = await Job.find({ companyId: companyId })

  res.status(200).json({
    jobs,
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
exports.getJobsByCompanyId = getJobsByCompanyId
