// Require Packages
const express = require('express')
const cors = require('cors')

// Require Controllers
const ctrl = require('./controllers/controller')
const swapiCtrl = require('./controllers/httpOperations')

// Create The Server Instance
const app = express()

// Top Level Middleware to Parse JSON to JS
app.use(express.json())
app.use(cors())

// Endpoints
app.get('/user/:id', ctrl.getU)
app.get('/user', ctrl.getUserByQuery)
app.post('/user', ctrl.getUsers)
app.get('/users', ctrl.newUser)
app.put('/users/:id', ctrl.getKyle)
app.delete('/users/:id', ctrl.getDelete)

app.get('/swapi/users/:page', swapiCtrl.getSwapiCharacters)

//
app.listen(8080, () => {
    console.log('server running :)')
})