const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    company:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String,required:true}
},
{
    timestamps:true
});

const Job = mongoose.model('JobList',jobSchema);
module.exports = Job;