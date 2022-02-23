// Node has an Event Module Where we can create, fire, and listen for our own events.
var EventEmitter = require("events");
var eventEmitter = new EventEmitter(); // Instance of Event Emitter Class

eventEmitter.on("demoEvent", function () {
  //A callBack ( Event handler )
  console.log("Event Triggered");
});
eventEmitter.emit("demoEvent"); //Emitting an Event

//In express
var express = require("express");

const admin = express();
const app = express();

admin.on("mount", function (parent) {
  console.log("Admin Mounted");
});

app.use("/admin", admin);
app.listen(2345);
