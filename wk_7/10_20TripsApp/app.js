const express = require('express');
const app = express();
const mustacheExpress= require('mustache-express');
// require('process');
const tripsRouter = require("./routes/trips"); 

global.trips = [];

app.use('/static', express.static('css'));

app.use(express.static('images'));

// app.use(express.urlencoded())

app.use('/trips', tripsRouter)

app.engine('mustache', mustacheExpress());

app.set('views', "./views");

app.set('views engine', 'mustache');






