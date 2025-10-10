import { connectDB } from "../db/connectDB.js";
import Product from "../models/product.model.js";

export async function GET(request) {
  await connectDB();

  try {
    const products = await Product.find({}).sort({ createdAt: -1 });

    return Response.json({ products }, { status: 200 });
  } catch (error) {
    console.log("Error in fetching products");

    return Response.json({ message: error.message }, { status: 400 });
  }
}
