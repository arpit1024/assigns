const express = require("express");
const fs = require('fs');
const User = require("../models/user.model")

const upload = require("../middlewares/upload")

const router = express.Router();

router.post("/",upload.single("userImages"),async(req,res) =>{
    try{
        const product = await User.create( {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
        })
        return res.status(201).json({product})
    } catch(e){
        return res.status(500).json({status: "failed",message: e.message});
    }
})

router.delete("/:id",async(req,res) =>{
    try{
        const userByid = await User.findById(req.params.id).lean().exec();
        fs.unlink(`${userByid.profile_pic}`,err => {
            if (err) {
                console.log(err.message);
            }
            else {
              console.log("Deleted");
            }
          })
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        res.status(201).send(user);

    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.patch('/:id',upload.single("userImages"), async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        fs.unlink(`${user.profile_pic}`,err=>{
            if(err){
                console.log(err.message);
            }else
            {
                console.log("Deleted")
            }
        })
        const newUser = await User.findByIdAndUpdate(req.params.id,{ first_name:req.body.first_name, last_name: req.body.last_name,profie_pic:req.file.path }); 
        res.send(newUser);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})
module.exports = router;