const database = require('./database')

module.exports = async function( properties, client) {
  await database.connect()

  await database.query(
    `insert into clients 
    (client_id,free_schedule_id,created_at,updated_at) 
    values ('${properties}','${client}', now(), now())`)

  await database.end()
  return rows;
}