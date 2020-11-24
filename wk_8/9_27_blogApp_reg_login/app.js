const express = require('express')

const app = express()

const mustacheExpress = require('mustache-express')

const models = require('./models')

//??
app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())

app.set('views', "./views")

app.set('view engine', 'mustache')





let post = models.Post.build({
    title: 'What not to do 1x signing up to Digital Crafts FS Immersive 16-week bootcamp',
    body:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    comment: 'Love This!'
})

post.save()



app.listen(3000, () => {
    console.log('Server is running')
})