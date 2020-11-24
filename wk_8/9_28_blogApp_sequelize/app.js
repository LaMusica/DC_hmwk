const express = require('express')

const app = express()

const mustacheExpress = require('mustache-express')

const models = require('./models')


app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')


app.listen(3000, ()=> {
    console.log("Server is Running")
})