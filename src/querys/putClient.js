const database = require('./database')

module.exports = async function(name) {
  await database.connect()
  await database.query(`
  insert into clients (name,created_at,updated_at) values ('${name}', now(), now())`)
  await database.end()
}