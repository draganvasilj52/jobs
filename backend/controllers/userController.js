const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
  const { username, password, email } = req.body

  let existingUser

  existingUser = await User.findOne({ email })

  if (existingUser) {
    return res
      .status(400)
      .json({ message: 'User with that email already exists.' })
  }

  let hashedPassword = await bcrypt.hash(password, 12)

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  })

  await newUser.save()

  const token = jwt.sign(
    { username: newUser.username, id: newUser.id },
    'secret',
    {
      expiresIn: '1h',
    }
  )

  newUser.password = undefined

  res.status(201).json({
    userData: newUser,
    token,
  })
}

const signIn = async (req, res) => {
  const { email, password } = req.body

  existingUser = await User.findOne({ email })

  if (!existingUser) {
    return res.status(400).json({ message: 'User with that email not exist.' })
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  )

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid password.' })
  }

  const token = jwt.sign(
    { username: existingUser.username, id: existingUser._id },
    'secret',
    { expiresIn: '1h' }
  )

  existingUser.password = undefined

  res.status(200).json({ userData: existingUser, token })
}

exports.signUp = signUp
exports.signIn = signIn
