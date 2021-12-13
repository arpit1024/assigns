const express =require('express');
const Seat = require("../models/seat.model");
const route = express.Router();
route.post('', async(req,res)=>{

    try{
     const seat = await Seat.create(req.body);
         res.json(seat)
    }
    catch(e){
        res.send(e.message)
    }
})
route.get('', async(req,res)=>{

    try{
     const seat = await Seat.find().populate("show");
         res.json(seat)
    }
    catch(e){
        res.send(e.message)
    }
})
module.exports = route;