exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("participants")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("participants").insert([
          { userID: 1, eventID: 1 }
        ])
      ]);
    });
};
