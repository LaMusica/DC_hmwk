const express = require('express');
const app = express();
const mustacheExpress= require('mustache-express');
//const { } = require('process');
const tripsRouter = require("./routes/trips"); 

global.trips = [];

/*
app.use('/static', express.static('css'));

app.use(express.static('images'));
*/
 app.use(express.urlencoded())

app.use('/trips', tripsRouter)

app.engine('mustache', mustacheExpress());

app.set('views', "./views");

app.set('views engine', 'mustache');


/*
app.get('/profile', (req,res) => {

    res.render('profile');
})
*/
app.listen(3000, () => {
    console.log('Server is Running...')
})












