const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const postController = require("./controllers/post.controller");

const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/signup",register);
app.post("/signin",login);

app.use("/posts", postController);

module.exports = app;
