var { Client } = require('pg');

module.exports = function() {
  const client = new Client()
  await client.connect()

  const result = await client.query('select * from properties')

  await client.end()
  return result;
}