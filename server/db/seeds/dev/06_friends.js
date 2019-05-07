exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("friends")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("friends").insert([
          { userID: 1, friendID: 2 },
          { userID: 1, friendID: 3 },
          { userID: 2, friendID: 3 },
          { userID: 3, friendID: 4 },
          { userID: 3, friendID: 5 }
        ])
      ]);
    });
};
