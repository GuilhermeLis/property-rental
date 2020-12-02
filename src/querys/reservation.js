const database = require('./database')

module.exports = async function( properties, client) {
  await database.connect()

  await database.query(
    `insert into reservation 
    (client_id,free_schedule_id,created_at,updated_at) 
    values ('${client}','${properties}', now(), now())`)

  await database.end()
}