const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const UserSchema=Schema({
    full_name:{
        type:String,
        required:['Full Name is Requied']
    },
    email:{
        type: String,
        unique: true,
        required:['email is required']
    },
    password:String
})

module.exports=mongoose.model('User',UserSchema);