const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//cities
const connect = ()=>{
   mongoose.connect('mongodb://127.0.0.1:27017/Naukri');
}
const citySchema = mongoose.Schema({
       city_name: {type:String,required:true},
},
{
   versionKey:false
})
const City = mongoose.model('citie', citySchema);


app.post("/cities", async(req,res)=>
{
   try{
      const city = await City.create(req.body)
      res.status(201).send(city);
   }catch(e)
   {
      console.log(e.message);
   }
})
app.get("/cities", async(req,res)=>
{
   try{
      const city = await City.find().lean().exec();
      res.status(201).send(city);
   }catch(e)
   {
      console.log(e.message);
   }
})

//companies
const companySchema = mongoose.Schema({
   company_name: {type:String,required:true},
   job_openings:{type:Number, required:true},
   about:{type:String, required:true},
   city_id:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"citie",
     required:true
   },
 },
{
versionKey:false
})
const Company = mongoose.model('company', companySchema);

app.post("/companys", async(req,res)=>
{
   try{
      const company = await Company.create(req.body)
      res.status(201).send(company);
   }catch(e)
   {
      console.log(e.message);
   }
})
app.get("/companys", async(req,res)=>
{
   try{
      const company = await Company.find().lean().exec();
      res.status(201).send(company);
   }catch(e)
   {
      console.log(e.message);
   }
})
                     /*        ALL API REQUESTS ARE WRITTEN HERE        */

//AN API TO GET jobs matches particular skills
app.get("/jobs/:cityName/:skill", async(req,res)=>
{
   try{
      const jobs = await Job.find({skill : req.params.skill}).populate({ 
         path: 'companyId',
         populate: {
           path: 'city_id'
         } 
      }).lean().exec();
      
      let suchJobs = []

      jobs.forEach(job => {
         console.log(job.companyId.city_id.city_name);
         if(job.companyId.city_id.city_name == req.params.cityName)
         {
            suchJobs.push(job)
         }
      });
      res.status(201).send(suchJobs);
   }catch(e)
   {
      console.log(e.message);
   }
})


//AN API TO GET Company with most number of job openings
app.get("/companys/maxJobs", async(req,res)=>
{
   try{
      const companies = await Company.find().populate({path:"city_id"}).sort({job_openings: -1}).lean().exec();
      res.status(201).send({company:companies[0]});
   }catch(e)
   {
      console.log(e.message);
   }
})
//AN API TO GET Details of Company
app.get("/companys/:id", async(req,res)=>
{
   try{
      const companies = await Company.find({_id:req.params.id}).populate({path:"city_id"}).sort({job_openings: -1}).lean().exec();
      res.status(201).send({company:companies[0]});
   }catch(e)
   {
      console.log(e.message);
   }
})
//AN API TO GET jobs sorted as per their rating
app.get("/jobs/sorted", async(req,res)=>
{
   try{
      const jobs = await Job.find().sort({rating:-1}).lean().exec();
      res.status(201).send(jobs);
   }catch(e)
   {
      console.log(e.message);
   }
})
//AN API TO GET jobs with 2 months notice period
app.get("/jobs/noticeTwoMonths", async(req,res)=>
{
   try{
      const jobs = await Job.find({noticePeriod:2}).lean().exec();
      res.status(201).send(jobs);
   }catch(e)
   {
      console.log(e.message);
   }
})
//AN API TO GET jobs with WORK FROM HOME
app.get("/jobs/WFH", async(req,res)=>
{
   try{
      const jobs = await Job.find({workFromHome:true}).lean().exec();
      res.status(201).send(jobs);
   }catch(e)
   {
      console.log(e.message);
   }
})


//jobsSchema
const jobSchema = mongoose.Schema({
   designation: {type:String,required:true},
   noticePeriod:{type:Number, required:true},
   rating:{type:Number, required:true},
   skill:{type:String, required:true},
   companyId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"company",
     required:false
   },
   workFromHome:{type:Boolean,required:true}
 },
{
versionKey:false
})
const Job = mongoose.model('job', jobSchema);

app.post("/jobs", async(req,res)=>
{
   try{
      const job = await Job.create(req.body)
      res.status(201).send(job);
   }catch(e)
   {
      console.log(e.message);
   }
})
app.get("/jobs", async(req,res)=>
{
   try{
      const jobs = await Job.find().lean().exec();
      res.status(201).send(jobs);
   }catch(e)
   {
      console.log(e.message);
   }
})

app.listen(2345, async()=>
{
   await connect();
   console.log("Listening...");
})