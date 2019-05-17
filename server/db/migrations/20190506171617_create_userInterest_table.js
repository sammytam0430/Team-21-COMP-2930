exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("userInterest", table => {
      table.integer("userID").unsigned();
      table.integer("interestID").unsigned();
      table.primary(["userID", "interestID"]);
      table
        .foreign("interestID")
        .references("interestID")
        .inTable("interests")
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
  return Promise.all([knex.schema.dropTable("userInterest")]);
};
