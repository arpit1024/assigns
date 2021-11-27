const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


const connect = ()=>{
    try{
        return mongoose.connect("mongodb+srv://arpit321:arpit222@cluster0.epnav.mongodb.net/movieDatabase");
    }catch(e){
        console.log(e);
    }
};

const movieSchema = new mongoose.Schema({
    id: {type:Number, required:true},
    movie_name: {type:String, required:true},
    movie_genre: {type:String, required:true},
    production_year: {type:Number, required:true},
    budget: {type:Number, required:true}
});

const Movie = mongoose.model("movie", movieSchema);

app.get('/movies', async(req,res)=>{
    try{
        const users = await Movie.find().lean().exec();
        res.send({users});
    }
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"});
    }
})

app.post("/movies", async(req,res)=>{
    try{
        const user = await Movie.create(req.body);
        console.log("inside post");
        res.status(201).send(user);
    }catch(e){
        res.status(500).json({message:e.message, status:"Failed"});
    }
})

app.get('/movies/:id', async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id).lean().exec();
        res.send({movie});
    }
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"});
    }
})

app.patch('/movies/:id', async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send({movie});
    }
    catch(e){
        res.status(500).json({message:e.message, status: "Failed!"});
    }
})

app.delete('/users/:id', async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id,{new:true}).lean().exec();
        res.send({movie});
    }
    catch(e){
        res.status(500).json({ message:e.message, status: "Failed!" });
    }
})

app.listen(2345, async ()=>{
    await connect();
    console.log("listening...");
})
