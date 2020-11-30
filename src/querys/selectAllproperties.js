const database = require('./database')

module.exports = async function() {
  await database.connect()

  const result = await client.query('select * from properties')

  await database.end()
  return result;
}