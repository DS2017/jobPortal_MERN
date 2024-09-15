require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config')
const UserInfo = require('./models/userSchema');
const AddJobs = require('./models/jobSchema');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!.. ')
})

app.post('/api/signup',async (req,res) =>{
  let user = new UserInfo(req.body)
  let result = await user.save();
  result = result.toObject();
  delete result.password
  result.success ="user added succesfully!.." // add newKey value pair
  res.status(201).send(result);
  // res.send(req.body);
  return;
})

app.post('/api/login',async (req,res)=>{
  if(req.body.password && req.body.email){
      let user = await UserInfo.findOne(req.body).select('-password');
      if(user){
        res.send(user)
      }
      else{
        res.send({error:'no user found'})
      }
  }
  else{
    res.send({error:'User name or Password not to be blanck'})
  }
  
})

app.post('/api/addnewjobs',async (req,res)=>{
  let jobs = new AddJobs(req.body);
  let data = await jobs.save();
  res.status(201).send({"msg":"new job added successfully"})
})

app.get('/api/getjoblist',async (req,res)=>{
let jobList = await AddJobs.find();
if(jobList.length > 0){
  res.send(jobList)
}
else{
  res.send({"result":"no job found"})
}
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
