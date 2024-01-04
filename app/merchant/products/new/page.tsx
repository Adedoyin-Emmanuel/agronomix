"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import Text from "@/app/components/Text";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

const MerchantProductPage = () => {
  const pathname = usePathname();

  return (
    <MerchantSidebarLayout>
      <form className="w-full lg:w-10/12">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            Add Product
          </h3>
          <Text className="text-sm">Add a new product to your store.</Text>
        </section>

        <br />
        <section className="my-5">
          <label className="block my-1">Product Name:</label>
          <Input
            type="text"
            placeholder="Enter your product name"
            name="productName"
          />
        </section>

        <section className="my-5">
          <label className="block my-1">Product Description:</label>
          <textarea className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md" />
        </section>

        <section className="my-5">
          <label className="block my-1">Product Price:</label>
          <Input
            type="number"
            placeholder="Enter your product price"
            name="productPrice"
          />
        </section>

        <section className="my-5">
          <label className="block my-1">Product Images:</label>
          <section className="w-full flex items-center justify-center my-1 border border-accent rounded h-20 p-2">
            <section className="w-56 flex items-center">
              <label className="capitalize text-white text-center  w-full rounded p-3 bg-primary transition-all transform hover:bg-accent cursor-pointer">
                <input
                  type="file"
                  id="productImage"
                  name="produtImages"
                  className=""
                  hidden
                  multiple
                />
                upload images
              </label>{" "}
            </section>
          </section>
        </section>
      </form>
    </MerchantSidebarLayout>
  );
};

export default MerchantProductPage;
