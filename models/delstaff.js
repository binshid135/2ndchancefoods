const mongoose=require('mongoose')

const delschema=new mongoose.Schema({
    username:String,
    password:String,
    mobile:Number
    
})
const Delstaff=mongoose.model('deliverystaff',delschema)
module.exports=Delstaff