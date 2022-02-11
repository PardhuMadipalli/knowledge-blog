const express = require('express')
const router = express.Router()

module.exports = params => {
  const { articlesService } = params

  router.get('/', async (request, response, next) => {
    try {
      const articles = await articlesService.getArticles()
      response.send(articles)
    } catch (err) {
      return next(err)
    }
  })

  return router
}
