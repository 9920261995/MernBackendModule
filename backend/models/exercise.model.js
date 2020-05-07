const mongoose = require('mongoose')

const excersiseSchema = new mongoose.Schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:String,required:true},
    date:{type:String,required:true},
    }
    ,{timestamps:true})


const Exercise = mongoose.model("exercise",excersiseSchema)    


module.export =  Exercise;