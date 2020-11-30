
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {
          id: 1,
          country: 'Brasil',
          first_address: 'ssss',
          second_address:'jddd',
          postal_code:'8888111',
          home_number:'4',
          city:'São Luís',
          federative_unity:'MA',
          neighbornhood:'Habita',
          comment:' bem localizado e uma ótima vista',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          country: 'Brasil',
          first_address: 'ssss',
          second_address:'jddd',
          postal_code:'8888111',
          home_number:'4',
          city:'São Luís',
          federative_unity:'MA',
          neighbornhood:'Cohab',
          comment:' bem localizado e uma ótima vista',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          country: 'Brasil',
          first_address: 'ssss',
          second_address:'jddd',
          postal_code:'8888111',
          home_number:'4',
          city:'São Luís',
          federative_unity:'MA',
          neighbornhood:'Cohab',
          comment:' bem localizado e uma ótima vista',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          country: 'Brasil',
          first_address: 'ssss',
          second_address:'jddd',
          postal_code:'8888111',
          home_number:'4',
          city:'São Luís',
          federative_unity:'MA',
          neighbornhood:'Penisula',
          comment:' bem localizado e uma ótima vista',
          created_at: new Date(),
          updated_at: new Date()
        },
      ]);
    });
};
