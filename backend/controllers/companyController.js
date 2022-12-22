const Company = require('../models/companies')

const createCompany = async (req, res) => {
  const { name, info, location, employees, aboutCompany } = req.body

  const company = new Company({
    name,
    info,
    location,
    employees,
    experiences: [],
    jobIds: [],
    aboutCompany,
  })
  await company.save()
  res.status(200).json({
    company,
  })
}

const getCompany = async (req, res) => {
  const { companyName } = req.params

  try {
    const company = await Company.find({ name: companyName })

    console.log(company)

    if (company.length === 0) {
      return res.status(500).send('Page not found')
    }

    res.status(200).json({
      company,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'No company',
    })
  }
}

const createExperience = async (req, res) => {
  const { companyName } = req.params
  const { experience } = req.body

  let userId = req.userData.userId
  let username = req.userData.username

  const company = await Company.findOne({ name: companyName })

  company.experiences.push({ experience, userId, username })

  await company.save()

  res.status(200).json({
    company,
  })
}

exports.createCompany = createCompany
exports.getCompany = getCompany
exports.createExperience = createExperience
