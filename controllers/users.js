const bcrypt = require('bcryptjs')
const User = require('../models/users')

const usersController = {}

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt)

  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password_digest: hash
  })
    .then(user => {
      req.login(user, (err) => {
        if(err) return next(err)
        res.redirect('/')
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

module.exports = usersController