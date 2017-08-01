\c facts_gen_dev

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS fav_facts(
  id SERIAL PRIMARY KEY,
  fact_value TEXT,
  fact_id VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);