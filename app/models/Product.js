import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils';

const ProductSchema=new mongoose.Schema({
  
    id: { type: Number, unique: true },

    title:{type:String},
    description:{type:String},
    sales:{type:String},
    buy:{type:String},
    price:{type:Number}
})

const ProductList=mongoose.models.ProductList || mongoose.model('ProductList', ProductSchema);
export default ProductList;