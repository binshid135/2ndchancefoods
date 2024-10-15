const mongoose=require('mongoose')

const storeschema=new mongoose.Schema({
    username:String,
    password:String,
    mobile:Number
    
})
const Store=mongoose.model('storeadmin',storeschema)
module.exports=Store