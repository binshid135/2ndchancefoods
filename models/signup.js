const mongoose=require('mongoose')

const signschema=new mongoose.Schema({
    mail:String,
    password:String,
    username:String,
    mobile:Number
    
})
const Sign=mongoose.model('user',signschema)
module.exports=Sign