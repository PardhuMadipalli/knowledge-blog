const mongoose = require('mongoose')

class ArticlesService {
  constructor (log) {
    this.log = log
  }

  async getArticles () {
    const articles = await mongoose.connection.db.listCollections().toArray()
    this.log.info('Collections are', articles.length)
    return JSON.stringify(articles)
  }
}

module.exports = ArticlesService
