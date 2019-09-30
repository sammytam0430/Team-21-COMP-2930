module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'development',
      password : 'development',
      database : 'dev_db',
      port: 5432
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
