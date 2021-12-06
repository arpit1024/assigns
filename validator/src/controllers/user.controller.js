const express = require("express");

const { body, validationResult } = require('express-validator');
const User = require("../models/user.model")

const router = express.Router();

router.post("/",

body("first_name").notEmpty().withMessage('Name is required'),
body("last_name").notEmpty().withMessage('Last Name is required'),
body("email").custom(async (value) =>{
    const isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
   if(!isEmail)
   {
       throw new Error("Please Enter correct email address")
   }
   const user  = await User.findOne({email:value}).lean().exec();
   console.log(user);
   if(user)
   {
       throw new Error("Email already in use! Enter different Email")
   }
   return true;
}),
body("pincode").custom(value => {
    if(value.toString().length != 6)
    {
        throw new Error("Pincode should have exactly 6 numbers")
    }
    return true;
}),
body("age").isInt({min:1, max:100}).withMessage("Age should be an Interger value from 1 to 100"),
body("gender").custom(value =>{
    let gender = value.toLowerCase();
   if(gender!= "male" && gender!= "female" && gender!= "others")
   {
       throw new Error("Gender should male, female or others only")
   }
   return true;
}),

async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let newErrors = errors.array().map(({ msg, param, location }) => {
            return {
                [param]: msg
            };
        });
        return res.status(400).json({ errors: newErrors });
    }

    try {
        const product = await User.create(req.body);
        return res.status(201).json({ product });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

router.get("/",async(req,res) =>{
    try{
        const product = await User.find().lean().exec();
        return res.status(201).json({product})
    } catch(e){
        return res.status(500).json({status: "failed",message: e.message});
    }
})

router.delete("/:id",async(req,res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        res.status(201).send(user);

    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const newUser = await User.findByIdAndUpdate(req.params.id,{ first_name:req.body.first_name, last_name: req.body.last_name}); 
        res.send(newUser);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})
module.exports = router;