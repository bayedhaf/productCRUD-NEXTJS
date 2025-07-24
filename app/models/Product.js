import mongoose from 'mongoose'

const ProductSchema=new mongoose.Schema({
  
    id:{type:Number},
    title:{type:String},
    description:{type:String},
    sales:{type:String},
    buy:{type:String},
    price:{type:Number}
})

const ProductList=mongoose.models.ProductList || mongoose.model('User', ProductSchema);
export default ProductList;