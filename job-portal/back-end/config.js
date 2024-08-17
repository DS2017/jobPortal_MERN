const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const connectionStr = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`mongoDBconnect ${connectionStr.connection.host}`);
    }
    catch(error){
        console.log(`connect error ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;
