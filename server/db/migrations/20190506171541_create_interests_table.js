exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("interests", table => {
      table.increments("interestID");
      table.string("name").notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("interests")]);
};
