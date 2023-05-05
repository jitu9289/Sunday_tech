const mongoose=require('mongoose');

function connectDb(){
    mongoose.connect("mongodb://localhost:27017/sunday_tech").then(()=>{
        console.log("db is connected")
    }).catch(err=>{
        console.log(err);
    })
}

module.exports=connectDb;