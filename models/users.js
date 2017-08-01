const db = require('../db/config')

const User = {}

User.findByUsername = username => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [username])
}

User.create = user => {
  return db.one(`
    INSERT INTO users
    (firstname, lastname, email, username, password_digest)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.firstname, user.lastname, user.email, user.username, user.password_digest])
}

module.exports = User