const express = require('express')
const app = express()
const Database = require('./database/Database')
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

var database = new Database()
var DB = { quotes: [] }

DB.quotes = database.Data


app.get('/quotes', (req, res) => {
  res.json(DB.quotes)
})

app.get('/quote/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400)
  } else {
    var id = parseInt(req.params.id)
    var quote = DB.quotes.find(q => q.id === id)

    if (quote !== undefined) {
      res.json(quote)
    } else {
      res.sendStatus(404)
    }
  }
})

app.listen(3456, () => {
  console.log('API Online')
})

app.post('/quote', (req, res) => {
  var { id, name, quote } = req.body
  if (name !== '' && !isNaN(id) && quote !== '') {
    DB.quotes.push({ id, name, quote })
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.delete('/quote/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400)
  } else {
    var id = parseInt(req.params.id)
    var index = DB.quotes.findIndex(q => q.id === id)
    if (index === -1) {
      res.sendStatus(404)
    } else {
      DB.quotes.splice(index, 1)
      res.sendStatus(200)
    }
  }
})
