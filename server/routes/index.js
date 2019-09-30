const express = require('express')
const TodoRoutes =  require('./todos')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Desafio Front-end API')
})

router.use('/todos', TodoRoutes);

module.exports = router