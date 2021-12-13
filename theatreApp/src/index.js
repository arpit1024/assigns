const express = require('express');

const userCont = require("./controllers/user.controller");
const movieCont = require("./controllers/movie.controller");
const showCont = require("./controllers/show.controller");
const theatreCont = require("./controllers/theatre.controller");
const screenCont = require("./controllers/screen.controller");
const seatsCont = require("./controllers/seats.controller");

const app = express();

app.use(express.json());

app.use('/users',userCont);
app.use('/movies',movieCont);
app.use('/shows',showCont);
app.use('/theatres',theatreCont);
app.use('/screens',screenCont);
app.use('/seat',seatsCont);
//61b720a73bcab76a9b6bf90a
module.exports = app;