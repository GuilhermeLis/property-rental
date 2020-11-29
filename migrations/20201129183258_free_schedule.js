
exports.up = function(knex) {
   return knex.schema.withSchema('public').createTable('free_schedule', (table) => {
      table.increments()
      table
          .integer('propertie_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('properties')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.datetime('schedule_date').notNullable()
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('free_schedule')
};
