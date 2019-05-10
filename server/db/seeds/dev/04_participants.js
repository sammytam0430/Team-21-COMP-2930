exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("participants")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("participants").insert([
          { eventID: 1, userID: 1 },
          { eventID: 1, userID: 2 },
          { eventID: 1, userID: 3 },
          { eventID: 2, userID: 3 },
          { eventID: 2, userID: 5 },
          { eventID: 2, userID: 4 },
          { eventID: 3, userID: 3 },
          { eventID: 3, userID: 2 },
          { eventID: 3, userID: 5 }

        ])
      ]);
    });
};
