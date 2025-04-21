const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phoneNo:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
    },
    about:{
        type:String,
    },
    gender:{
        type:String,
    },
    dateOfBirth:{
        type:String,
    },
    otp:{
        type:String,
        createdAt: { type: Date, expires: 5*60*1000, default: Date.now }
    },
    token:{
        type:String,
        createdAt: { type: Date, expires: 24*60*1000, default: Date.now }
    }
    

})

module.exports = mongoose.model("user",user)