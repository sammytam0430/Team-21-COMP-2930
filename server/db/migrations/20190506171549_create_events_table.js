exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("events", table => {
      table.increments("eventID");
      table.integer("organizer").notNullable();
      table.string("name").notNullable();
      table.text("description").notNullable();
      table
        .integer("type")
        .unsigned()
        .notNullable();
      table.string("date").notNullable();
      table.string("start").notNullable();
      table.string("end").notNullable();
      table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
      table.string("location").notNullable();
      table.decimal("lat", null).notNullable();
      table.decimal("lng", null).notNullable();
      table.integer("numOfPeople").notNullable();
      table
        .foreign("organizer")
        .references("userID")
        .inTable("users")
        .onDelete("cascade");
      table
        .foreign("type")
        .references("interestID")
        .inTable("interests")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("events")]);
};
