const database = require('./database')

module.exports = async function() {
  await database.connect()

  const {rows} = await database.query(`
    select
        fs.id,
        to_char(fs.schedule_date, 'Day, DD-MM-YYYY') as date,
        p.city,
        p.neighbornhood,
        p.federative_unity,
        p.country,
        p.comment
        from properties p
      join free_schedule fs on p.id = fs.propertie_id
      where fs.available = true;
  `)

  await database.end()
  return rows;
}