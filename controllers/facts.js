const Fact = require('../models/facts')
const factsController = {}

factsController.create = (req, res) => {
  Fact.create({
    fact: req.body.fact
  }, req.user.id).then(fact => {
    res.redirect('/')
  })
}

module.exports = factsController