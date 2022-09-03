require('dotenv').config();
module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DBPASSWORD,
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": process.env.DBPASSWORD,
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
