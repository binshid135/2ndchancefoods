const mongoose=require('mongoose')

const proschema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    stock:Number,
})
const Pro=mongoose.model('products',proschema)
module.exports=Pro