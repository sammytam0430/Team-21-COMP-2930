exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("friends", table => {
      table.integer("userID").unsigned();
      table.integer("friendID").unsigned();

      table
        .foreign("userID")
        .references("userID")
        .inTable("users")
        .onDelete("cascade");
      table
        .foreign("friendID")
        .references("userID")
        .inTable("users")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("friends")]);
};
