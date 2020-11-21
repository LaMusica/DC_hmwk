const express = require('express')

const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/routes')





app.engine('mustache', mustacheExpress())

app.set('views', './views')


app.set('view engine', 'mustache')


let movies = [

    {name: "Movie1", movieId: 1},
    {name: "Movie2", movieId: 2}
]




app.listen(3000, () => {
    console.log('Server is Running...')
})