"use client";

import { addAction } from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import upload from "../assets/upload_icon.svg";

const AddForm = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");

  async function clientAddAction(formData) {
    const { error, success } = await addAction(formData);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      router.push("/");
      setImageURL("");
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;
      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("Image larger than 1MB is not allowed.");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };

  return (
    <form
      action={clientAddAction}
      className="w-full max-w-2xl mx-auto flex flex-col space-y-6 p-6 bg-white rounded-lg shadow-xl mt-6"
    >
      {/* Image Preview */}
      {imageURL && (
        <Image
          src={imageURL}
          alt="Selected image"
          width={800}
          height={400}
          className="w-50 h-68 mx-auto object-cover rounded-md border border-primary/70 p-3"
        />
      )}

      {/* Product Image Upload */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-semibold">Product Image</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          className="block cursor-pointer w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary/90
            border border-gray-300 rounded-md "
        />
      </div>

      {/* Product Name */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-semibold">Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-semibold">Price (min ₹30)</label>
        <input
          type="number"
          min={30}
          name="price"
          placeholder="Enter product price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-semibold">Description</label>
        <textarea
          name="description"
          placeholder="Enter product description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/90 transition duration-200"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddForm;
