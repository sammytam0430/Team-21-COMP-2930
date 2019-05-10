const settings = require("./db/settings.json") || {};

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: settings.hostname,
      user: settings.user,
      password: settings.password,
      database: settings.database,
      port: settings.port
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    }
  },

  test: {
    client: "pg",
    connection: "postgres://localhost/<examples_test>",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: true,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/production"
    },
    useNullAsDefault: true
  }
};
