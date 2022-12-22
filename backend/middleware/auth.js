const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  try {
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized user' })
    }
    const decodedToken = jwt.verify(token, 'secret')

    req.userData = { userId: decodedToken.id, username: decodedToken.username }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized user' })
  }
}
