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
