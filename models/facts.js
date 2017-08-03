const db = require('../db/config')

const Fact = {}

Fact.create = (fact, userid) => {
  return db.one(`
    INSERT INTO fav_facts
    (fact_value, user_id)
    VALUES ($1, $2)
    RETURNING *
  `, [fact.fact, userid])
}

Fact.destroy = (id) => {
  return db.none(`
    DELETE FROM fav_facts
    WHERE id = $1
  `, [id])
}

module.exports = Fact