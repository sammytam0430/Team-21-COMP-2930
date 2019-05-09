exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("users").insert([
          {
            userID: 1,
            fname: "Derek",
            lname: "Dang",
            email: "ddang@my.bcit.ca",
            prefEmail: "ddang@gmail.com",
            randBlurb: "I'm god"
          },
          {
            userID: 2,
            fname: "Lambert",
            lname: "Chan",
            email: "lchan@my.bcit.ca",
            prefEmail: "lchan@gmail.com",
            randBlurb: "Random thing"
          },
          {
            userID: 3,
            fname: "Jameson",
            lname: "Cheong",
            email: "jcheong@my.bcit.ca",
            prefEmail: "jcheong@gmail.com",
            randBlurb: "Sammy, give me your Latios"
          },
          {
            userID: 4,
            fname: "Anita",
            lname: "King",
            email: "aking@my.bcit.ca",
            prefEmail: "aking@gmail.com",
            randBlurb: "Whatever, like literally whatever"
          },
          {
            userID: 5,
            fname: "Charles",
            lname: "Huang",
            email: "chuang@my.bcit.ca",
            prefEmail: "chuang@gmail.com",
            randBlurb: "Hi"
          }
        ])
      ]);
    });
};
