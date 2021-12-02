const express = require("express");
const connect = require('./configs/db');


const usersController = require("./controllers/users.controller");
const adminController = require("./controllers/admin.controller");

const app = express();

app.use(express.json());

app.use("/users", usersController);
app.use("/admins", adminController);


app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});