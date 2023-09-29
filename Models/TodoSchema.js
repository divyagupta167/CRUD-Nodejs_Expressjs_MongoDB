const mongoose = require('mongoose')

//creating schema
const todoSchema = mongoose.Schema({
   todo:{
        type:String,
        required : true
    } 
})


//converting schema to model
module.exports=mongoose.model("Todo",todoSchema)


//export
