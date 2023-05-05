const mongoose=require('mongoose');


const user=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    contact:{
        type:Number
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    }
})

const User=mongoose.model('User',user);

module.exports=User;