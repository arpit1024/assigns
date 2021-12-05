const express = require("express");
const fs = require('fs');
const Gallery = require("../models/gallery.model")

const upload = require("../middlewares/upload")

const router = express.Router();

router.post("/",upload.any("galleryImages"),async(req,res) =>{
    const galleryImages = req.files.map((ele)=> ele.path);

    try{
        const product = await Gallery.create( {
           user_id:req.body.user_id,
           pictures:galleryImages,
        })
        return res.status(201).json({product})
    } catch(e){
        return res.status(500).json({status: "failed",message: e.message});
    }
})

router.post("/limits",upload.array("galleryImages",5),async(req,res) =>{
    const galleryImages = req.files.map((ele)=> ele.path);

    try{
        const product = await Gallery.create( {
           user_id:req.body.user_id,
           pictures:galleryImages,
        })
        return res.status(201).json({product})
    } catch(e){
        return res.status(500).json({status: "failed",message: e.message});
    }
})

router.delete("/:id",async(req,res) =>{

    const gallery = await Gallery.findById(req.params.id).lean().exec();

    gallery.pictures.forEach(image =>{
        fs.unlink(`${image}`, e=>{
         if(e)
         {
             console.log(e.message)
         }else
         {
             console.log("Deleted")
         }
        })
    })
    res.send(gallery)
}
)
module.exports = router;