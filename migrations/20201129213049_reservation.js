
exports.up = function(knex) {
  return knex.schema.withSchema('public').createTable('reservation', (table) => {
    table.increments()
    table
          .integer('client_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('clients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    table
          .integer('free_schedule_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('free_schedule')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    table.timestamps()
  })
};

exports.down = function(knex) {
  
};
