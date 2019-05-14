module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "development",
      password: process.env.DB_PASSWORD || "development",
      database: process.env.DB_NAME || "konnect_db",
      port: process.env.DB_PORT || 5432
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
