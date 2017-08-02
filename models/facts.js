const db = require('../db/config')

const Fact = {}

Fact.create = (fact, userid) => {
  db.one(`
    INSERT INTO fav_facts
    (fact_value, user_id)
    VALUES ($1, $2)
    RETURNING *
  `, [fact.fact, userid])
}

module.exports = Fact