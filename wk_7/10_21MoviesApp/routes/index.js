const express = require('express')
const router = express.Router()
const {v4: uuidv4 } = require('uuid')
//uuidv4(


    let movies = [

        {name: "Movie1", movieId: 1},
        {name: "Movie2", movieId: 2}
    ]
    
    let details = [
    
            {movieId: 1, genre: "Comedy", year:2020 },
            {movieId: 2, genre: "Action", year:1999}
            
    
    ]


router.get('/movies', (req,res) => {

    res.render("movies", {movies: movies})

})



router.get('/movies/:movieId', (req,res) => {
    const movieId = req.params.movieId

    const movieDetails = details.find((movie) => {
        return movie.movieId == movieId
    }) 
    console.log(movieDetails)
    res.send('')
})







module.exports = router