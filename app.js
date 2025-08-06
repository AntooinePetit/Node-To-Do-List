const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

require('./db')

app.use(express.json())

const tasks = require('./routes/tasks')

app.use('/api/tasks', tasks)

app.get('/', (req, res) => {
  res.send('Rien à voir ici')
})

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`)
})