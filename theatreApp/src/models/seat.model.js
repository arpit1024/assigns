const mongoose = require('mongoose');

const seatSchema = mongoose.Schema({
    show:{type:mongoose.Schema.Types.ObjectId,ref:"show", required:true},
})
module.exports = mongoose.model("seat", seatSchema);