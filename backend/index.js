const express=require('express');
const mongoose=require("mongoose")
const connectDb=require('./db');
const User=require('./model');
const app=express();

connectDb();
app.use(express.json())


app.get('/',async(req,res)=>{
   const user=await User.find();
   res.send(user);
})

app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user) return res.status(404).send("user not found");
    res.send(user);
 })



app.post('/create',async(req,res)=>{
    
    const body=req.body;
    const userData=new User({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        contact:body.contact,
        state:body.state,
        city:body.city
    })
    const response=await userData.save();
    res.status(201).send('successfully saved')
})

app.put('/update/:id',async(req,res)=>{
    const id=req.params.id;
    const{firstName,lastName,email,contact,city,state}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate({_id:id},{$set:{firstName,lastName,email,contact,city,state}},{new:true}) 
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error"});
    }
})

app.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await User.findByIdAndRemove(id);
    res.send("delete Successfully");
    console.log(result)
})



app.listen(9500,()=>{
    console.log("server is running");
})