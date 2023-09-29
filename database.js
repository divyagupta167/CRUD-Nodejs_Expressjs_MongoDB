const mongoose = require('mongoose')

const dataBase = async()=>{
      try {
        mongoose.connect(process.env.DATABASE_URL,{
           useNewUrlParser:true,
           useUnifiedTopology: true 
        }).then(()=>{
            console.log("Database Connected")
        }).catch((err)=>{
            console.log(err);
        })
      } catch (err) {
        console.log(err);
        
      }
}

module.exports=dataBase