const express = require('express')

const app = express()

const mustacheExpress = require('mustache-express')

const models = require('./models')


app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')





/*
let post = models.Post.build({
    title: "Top 3 Technologies I learned at DC's FS Immersive Bootcamp",
    body:  "React.JS, Mustache, Node.js *In no particular Order*",
    date: 2020-11-25
         
})
*/


/*
post.save().then((savedPost) => {
        console.log(savedPost)
})
*/


/*

        let dateAsString = "11/23/2020"
        
        let d = new Date(dateAsString)

*/

app.post('/create-post', (req,res) => {
    const title = req.body.title
    const body  = req.body.body
    const date  = req.body.date 

    //const date  = Date.parse(req.body.date) 

    // Build Post Object

    let entry = models.Entry.build({
        title: title,
        body: body,
        date: date
})


    entry.save().then((savedEntry) => {
        res.render('confirm', savedEntry.dataValues)
    }).catch((error) => {
        res.render('error')
    })



})


app.listen(3000, ()=> {
    console.log("Server is Running")
})