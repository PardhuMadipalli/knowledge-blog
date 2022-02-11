const express = require('express')

const articlesRoute = require('./articles')

const router = express.Router()

module.exports = params => {
  router.use('/articles', articlesRoute(params))

  return router
}
