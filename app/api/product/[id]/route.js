import ProductList from "@/app/models/Product";
import ConnectedDB from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const params = await context.params;
  const { id } = params;

  
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid product ID format, must be a number" }),
      { status: 400 }
    );
  }

  await ConnectedDB();

  try {

    const product = await ProductList.findOne({ id: numericId });

    if (!product) {
      return new NextResponse(JSON.stringify({ message: "not-found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "product fetching error" }),
      { status: 500 }
    );
  }
}
 
export async function PUT(req,context) {
  const params=await context.params;
  const {id}=params;

  const isID=Number(id);
  if(isNaN(isID)){
    return new NextResponse(JSON.stringify({message:'error is happend ,id must a number'}),{status:404});
  }
   await ConnectedDB()
   try{
     const body=await req.json();
     const updateProduct=await ProductList.findOneAndUpdate({id:isID},body,{new:true});
     if(!updateProduct){
      {
        return new NextResponse(JSON.stringify({message:'error is happend ,not found'}),{status:404});
      }
      
     }
     return new NextResponse(JSON.stringify(updateProduct),{status:200});
   
   }
   catch(error){
    return new NextResponse(JSON.stringify({message:'error is happend ,updated product'}),{status:500});
  }
  
}

export async function DELETE(req, context) {
  const { id } = context.params;

  const isID = Number(id);
  if (isNaN(isID)) {
    return new NextResponse(
      JSON.stringify({ message: "Error: ID must be a number" }),
      { status: 400 }
    );
  }

  await ConnectedDB();

  try {
    const deletedProduct = await ProductList.findOneAndDelete({ id: isID });

    if (!deletedProduct) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Product deleted successfully", product: deletedProduct }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to delete product" }),
      { status: 500 }
    );
  }
}