const mongoose=require("mongoose")
const photoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model("Photo",photoSchema)