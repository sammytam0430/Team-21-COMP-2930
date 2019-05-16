exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", table => {
      table.increments("userID");
      table.string("fname").notNullable();
      table.string("lname").notNullable();
      table.string("email").notNullable().unique();
      table.string("prefEmail").unique();
      // TODO add notNullable();
      table.string("password");
      table.text("randBlurb");
      table.string("image");
      table.boolean("isActive").defaultTo(false);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("users")]);
};
