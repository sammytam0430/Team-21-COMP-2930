exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("events").insert([
          {
            eventID: 1,
            name: "Badminton",
            description: "Come and play",
            organizer: 1,
            type: 2,
            date: "2019-05-08",
            start: "12:00",
            end: "14:00",
            location: "BCIT Gym",
            numOfPeople: 4
          },
          {
            eventID: 2,
            name: "Basketball",
            description: "Really to mingle",
            organizer: 2,
            type: 1,
            date: "2019-05-08",
            start: "12:00",
            end: "14:00",
            location: "BCIT Outdoor Basketball Court",
            numOfPeople: 6
          },
          {
            eventID: 3,
            name: "Sushi Go",
            description: "Ready Up",
            organizer: 3,
            type: 3,
            date: "2019-05-08",
            start: "17:50",
            end: "20:00",
            location: "EhPod",
            numOfPeople: 4
          }
        ])
      ]);
    });
};
