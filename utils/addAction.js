"use server";

import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function addAction(formData) {
  try {
    const image = formData.get("image");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    
    if (!image || !name || !price || !description) {
      console.log("All fields are required.");

      return {
        error: "All fields are required.",
      };
    }

    await connectDB();

    // Image processing
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const imageResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "gift-hut",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });

    console.log("Image response: ", imageResponse);

    // Store in DB
    await Product.create({
      image: imageResponse.secure_url,
      name,
      price,
      description,
    });

    return {
      success: "Product added successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong.",
    };
  }
}
