const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");


router.get("/", (req,res) => {

    res.render('trips', {trips:trips} )


})


router.post('/new-trip', (req,res) => {

    const dest = req.body.destination;
    const dd = req.body.depart;
    const rd = req.body.return;

    let trip = {tripNo:uuidv4(), destination:dest, depart:dd, return:rd}


    trips.push(trip);


    res.redirect('./');


})


router.post("/delete-trip", (req,res) => {
    const tripNo = req.body.tripNo
    trips = trips.filter(trip => {
        return trip.tripNo != tripNo;
    })

    res.redirect('./');
})

module.exports=router;