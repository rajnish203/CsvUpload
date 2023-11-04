require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect(process.env.DATABASE_URL,
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> CSV Upload"))
  .catch((e)=>console.log("unable to connect mongo"));
}
