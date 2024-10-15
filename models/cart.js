const mongoose=require('mongoose')

const cartschema=new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    quantity:Number,
    total:Number,
})
const Cart=mongoose.model('cart',cartschema)
module.exports=Cart