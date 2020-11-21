const express = require('express')
const router = express.Router()
const {v4: uuidv4 } = require('uuid')
uuidv4()



router.get('')

router.get('/movies', (req,res) => {

    res.render("movies", {movies: movies})

})







module.exports = router