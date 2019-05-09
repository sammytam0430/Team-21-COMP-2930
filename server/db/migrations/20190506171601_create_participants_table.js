exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("participants", table => {
      table.integer("userID").unsigned();
      table.integer("eventID").unsigned();

      table
        .foreign("eventID")
        .references("eventID")
        .inTable("events")
        .onDelete("cascade");
      table
        .foreign("userID")
        .references("userID")
        .inTable("users")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("participants")]);
};
