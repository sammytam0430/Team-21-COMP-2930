exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("userInterest")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("userInterest").insert([
          { userID: 1, interestID: 4 },
          { userID: 1, interestID: 3 },
          { userID: 1, interestID: 6 },
          { userID: 2, interestID: 2 },
          { userID: 2, interestID: 7 },
          { userID: 3, interestID: 4 },
          { userID: 3, interestID: 1 },
          { userID: 4, interestID: 4 },
          { userID: 5, interestID: 5 }
        ])
      ]);
    });
};
