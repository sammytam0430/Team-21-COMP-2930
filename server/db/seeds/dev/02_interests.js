exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("interests")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("interests").insert([
          { interestID: 1, name: "Outdoor Sport" },
          { interestID: 2, name: "Indoor Sport" },
          { interestID: 3, name: "Card Game" },
          { interestID: 4, name: "Board Game" },
          { interestID: 5, name: "PC Game" },
          { interestID: 6, name: "Mobile Game" },
          { interestID: 7, name: "Literature" },
          { interestID: 8, name: "Music" },
          { interestID: 9, name: "Dacing" },
          { interestID: 10, name: "Food" },
          { interestID: 11, name: "Other" }
        ])
      ]);
    });
};
