import ProductList from "@/app/models/Product";
import ConnectedDB from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectedDB();

    const { id, title, description, sales, buy, price } = await req.json();

    const newProduct = new ProductList({
      id,
      title,
      description,
      sales,
      buy,
      price,
    });

    await newProduct.save(); 

    return NextResponse.json(
      { message: "Product created", data: newProduct },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating product:", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
