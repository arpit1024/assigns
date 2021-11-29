const express = require("express");
const connect = require('./configs/db');

const userController = require('./controllers/user.controllers');
const evalMarksController = require('./controllers/evalMarks.controllers');
const evaluationController = require('./controllers/evaluation.controllers');
const studentController = require('./controllers/student.controllers');

const app = express();
app.use(express.json());

app.use('/markEvals', evalMarksController);
app.use('', evaluationController);
app.use('/students',studentController);
app.use('/users', userController);



app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});