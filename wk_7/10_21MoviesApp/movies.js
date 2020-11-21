const express = require('express')

const app = express()
const mustacheExpress = require('mustache-express')
// const moviesRouter = require('./routes')


app.use(require("./routes") )


app.engine('mustache', mustacheExpress())

app.set('views', './views')


app.set('view engine', 'mustache')


/*
let movies = [

    {name: "Movie1", movieId: 1},
    {name: "Movie2", movieId: 2}
]

let details = [

        {movieId: 1, genre: "Comedy", year:2020 },
        {movieId: 2, genre: "Action", year:1999}
        

]
*/


app.listen(3000, () => {
    console.log('Server is Running...')
})