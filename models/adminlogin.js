const mongoose=require('mongoose')

const adminloginschema=new mongoose.Schema({
    username:String,
    password:String,
    type:String
    
})
const Adminlog=mongoose.model('adminlogin',adminloginschema)
module.exports=Adminlog