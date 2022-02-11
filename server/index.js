const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001

const db = require('./lib/db')
const config = require('./config')[process.env.NODE_ENV || 'production']
const log = config.log()

const ArticlesService = require('./services/ArticlesService')
const routes = require('./routes')

db.connect(config.database.dsn).then(() => {
  const articlesService = new ArticlesService(log)

  app.use(express.static(path.resolve(__dirname, '../client/build')))
  app.use(
    '/api',
    routes({
      articlesService
    })
  )

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  app.listen(PORT, () => {
    log.info(`Example app listening on port ${PORT}`)
  })
}).catch((err) => {
  log.fatal(err)
})

// const connection = mongoose.createConnection(
//   'mongodb+srv://blog.tkktk.mongodb.net/blog?retryWrites=true&w=majority',
//   mongooseOptions)
//
// connection.on('open', () => {
//
//   // connection.db.listCollections().toArray(function (err, names) {
//   //   if (err) {
//   //     console.log(err)
//   //   } else {
//   //     console.log(names)
//   //   }
//   // })
//
//   mongoose.connection.db.listCollections().toArray(function (err, names) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(names)
//     }
//   })
// })
