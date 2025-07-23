'use client';

import axios from "axios";
import { use, useEffect, useState } from "react";

export default function ReadFile({params}){
    const {id}=use(params);
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        const handlerRead=async()=>{
            try{
                const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setProduct(res.data)
            }
            catch(error){
                console.error('error one on id',error);
            }
        }
        handlerRead();
    },[id])

    if (!product) return <p className="p-4">Loading...</p>;
    return(
 <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Sales:</strong> {product.sales}</p>
      <p><strong>Buy:</strong> {product.buy}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
    )
}