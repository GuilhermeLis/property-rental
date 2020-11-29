
exports.up = function(knex) {
  this.create('properties', (table) => {
    table.increments()
    table.text('country')
    table.text('first_address')
    table.text('second_address')
    table.text('postal_code')
    table.text('home_number')
    table.text('city')
    table.text('federative_unity')
    table.text('neighbornhood')
    table.text('comment')
  })
};

exports.down = function(knex) {
  this.drop('properties')
};
