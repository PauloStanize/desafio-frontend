const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const path = require('path')
const cors = require('cors')
const sqlite = require('sqlite3')
const models = require('./models')

const start = () => {
  models.sequelize.sync().then(function () {
    console.log('connected to database')
  }).catch(function (err) {
    console.log(err)
  })

  const app = express()
  const port = 1234
  const public = '/public'

  app.use(cors())

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )

  app.use(express.static(path.join(__dirname, 'public')))

  app.use('/api', routes)

  app.get('*', (req, res) => {
    res.sendFile(__dirname, `\${public}\index.html`)
  })

  app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
}

module.exports = { start }