require('dotenv').config()
const bunyan = require('bunyan')

const loggers = {
  development: () => bunyan.createLogger({ name: 'development', level: 'debug' }),
  production: () => bunyan.createLogger({ name: 'production', level: 'info' })
}

module.exports = {
  production: {
    sitename: 'Knowledge Blog',
    log: loggers.production,
    database: {
      dsn: process.env.PRODUCTION_DB_DSN
    }
  }
}
