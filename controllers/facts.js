const Fact = require('../models/facts')
const factsController = {}

factsController.create = (req, res) => {
  Fact.create({
    fact: req.body.fact
  }, req.user.id).then(fact => {
    res.redirect('/')
  })
}

factsController.delete = (req, res) => {
  Fact.destroy(req.params.id)
    .then(() => {
      res.redirect('/profile')
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

module.exports = factsController