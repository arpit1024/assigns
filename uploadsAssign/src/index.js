const express = require("express");

const usersController = require ("./controllers/user.controller")
const galleryController = require("./controllers/gallery.controller")

const app = express();

app.use(express.json());


app.use("/users", usersController)
app.use("/gallerys", galleryController)

module.exports = app