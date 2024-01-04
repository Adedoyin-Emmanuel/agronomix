"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import Text from "@/app/components/Text";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const MerchantProductPage = () => {
  const pathname = usePathname();
  const [totalProducts, setTotalProducts] = useState<number>(10);
  const [productDetails, setProductDetails] = useState({
    name: "Live Chicken",
    description: "Fresh and healthy live chicken for sale.",
    images: ["/assets/chicken.jpg", "/assets/potato.jpg", "/assets/grapes.jpg"],
  });

  const handleNameChange = (newName: string) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      name: newName,
    }));
  };

  const handleDescriptionChange = (newDescription: string) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      description: newDescription,
    }));
  };

  const handleImageAddition = (newImage: string) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, newImage],
    }));
  };

  return (
    <MerchantSidebarLayout>
      <section className="w-full">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            Add Product
          </h3>
          <Text className="text-sm">Add a new product to your store.</Text>
        </section>

        <section className="my-4">
          <label className="font-bold">Product Name:</label>
          <input
            type="text"
            value={productDetails.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </section>

        <section className="my-4">
          <label className="font-bold">Product Description:</label>
          <textarea
            value={productDetails.description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </section>

        <section className="my-4">
          <label className="font-bold">Product Images:</label>
          <section>
            {productDetails.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-20 h-20 object-cover m-2 rounded"
              />
            ))}
          </section>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full border p-2 rounded mt-2"
            onChange={(e) => handleImageAddition(e.target.value)}
          />
        </section>

        <section className="flex items-center">
          <Link href="/merchant/products">
            <Link href="#" className="text-accent hover:underline">
              <FaPlus className="mr-2" /> Add Another Product
            </Link>
          </Link>
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default MerchantProductPage;
