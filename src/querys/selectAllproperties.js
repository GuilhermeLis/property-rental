const database = require('./database')

module.exports = async function() {
  await database.connect()

  const {rows} = await database.query('select * from properties')

  await database.end()
  return rows;
}