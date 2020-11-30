
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('free_schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('free_schedule').insert([
        {id: 1, propertie_id: 1, schedule_date: '2020-12-10T08:00'},
        {id: 2, propertie_id: 2, schedule_date: '2020-12-11T08:00'},
        {id: 3, propertie_id: 3, schedule_date: '2020-12-12T08:00'}
      ]);
    });
};
