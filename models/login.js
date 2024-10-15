const mongoose=require('mongoose')

const loginschema=new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    mail:String,
    password:String,
    type:String
    
})
const Log=mongoose.model('login',loginschema)
module.exports=Log