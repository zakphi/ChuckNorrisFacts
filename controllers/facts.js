const Fact = require('../models/facts')
const factsController = {}

factsController.create = (req, res) => {
  Fact.create({
    fact: req.body.fact
  }, req.user.id)
}

module.exports = factsController