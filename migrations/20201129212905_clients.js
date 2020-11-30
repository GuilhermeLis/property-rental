
exports.up = function(knex) {
  return knex.schema.withSchema('public').createTable('clients', (table) => {
    table.increments()
    table.text('name')
    table.timestamps()
  })
};

exports.down = function(knex) {
  
};
