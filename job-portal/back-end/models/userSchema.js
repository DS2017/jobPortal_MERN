const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
},
{timestamp:true}
);

const UserInfo = mongoose.model('Admin',userSchema)
module.exports = UserInfo;