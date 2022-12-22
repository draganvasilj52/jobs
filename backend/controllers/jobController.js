const Job = require('../models/job')
const Companies = require('../models/companies')
const mongoose = require('mongoose')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    jobs,
  })
}
/*
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

   const createdPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};
 */

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
