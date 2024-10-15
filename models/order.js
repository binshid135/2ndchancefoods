const mongoose=require('mongoose')

const orderschema=new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    deliverystatus:String,
    date:String,
    amount:Number
})
const Order=mongoose.model('ordermain',orderschema)
module.exports=Order