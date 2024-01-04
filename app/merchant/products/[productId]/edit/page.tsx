"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import Text from "@/app/components/Text";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { FaUpload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MerchantProductEdit = () => {
  const pathname = usePathname();

  return (
    <MerchantSidebarLayout>
      <section className="w-full">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            Product Edit
          </h3>
          <Text className="text-sm">Editing live chicken</Text>
        </section>
        <form className="w-full lg:w-10/12 mx-auto">
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

          <section className="my-4 mb-5">
            <label htmlFor="email" className="text-md block my-2">
              Product Category
            </label>
            <select
              className="select border-[1px] border-gray-300 focus:outline-none rounded-md w-full h-16 capitalize"
              name="productCategory"
            >
              <option value="fruits & vegetables" className="capitalize">
                fruits & vegetables
              </option>
              <option value="roots & tubers" className="capitalize">
                roots & tubers
              </option>
              <option value="dairy products" className="capitalize">
                dairy products
              </option>
              <option value="equipments" className="capitalize">
                equipments
              </option>
              <option value="livestock supplies" className="capitalize">
                livestock supplies
              </option>
              <option value="fruits & vegetables" className="capitalize">
                fruits & vegetables
              </option>
              <option value="fertilizers" className="capitalize">
                fertilizers
              </option>
              <option value="organic products" className="capitalize">
                organic products
              </option>
              <option value="pesticides" className="capitalize">
                pesticides
              </option>
              <option value="others" className="capitalize">
                others
              </option>
            </select>
          </section>

          <section className="my-5">
            <label className="block my-1">Product Images:</label>
            <section className="w-full flex items-center justify-between gap-x-3 my-1">
              <section className="h-52 w-96 bg-accent rounded flex items-center justify-center">
                <MdDelete className="w-8 h-8 text-white cursor-pointer" />
              </section>
              <section className="h-52 w-96 bg-red-500 rounded flex items-center justify-center">
                <MdDelete className="w-8 h-8 text-white cursor-pointer" />
              </section>
              <section className="h-52 w-96 bg-sky-500 rounded flex items-center justify-center">
                <MdDelete className="w-8 h-8 text-white cursor-pointer" />
              </section>
            </section>
          </section>

          <section className="my-5">
            <label className="block my-1">Add New Product Images:</label>
            <section className="w-full flex items-center justify-center my-1 border border-accent rounded h-20 p-2">
              <section className="w-56 flex items-center">
                <label className="capitalize w-full cursor-pointer text-accent flex items-center justify-center font-bold">
                  <input
                    type="file"
                    id="productImage"
                    name="produtImages"
                    className=""
                    hidden
                    multiple
                  />
                  <FaUpload className="text-accent w-5 h-5 text-center" />
                </label>{" "}
              </section>
            </section>
          </section>

          <section className="my-5">
            <label className="block my-1">Product Status:</label>
            <section className="flex gap-x-3">
              <input
                type="checkbox"
                name="publishProduct"
                className="checkbox text-accent"
              />
              <Text>
                Unpublish{" "}
                <span className="text-sm">
                  (This will only save the product and not publish it)
                </span>
              </Text>
            </section>
          </section>

          <br />
          <section className="my-4 mb-5  mx-auto">
            <Button>Update product</Button>
          </section>
        </form>
      </section>
    </MerchantSidebarLayout>
  );
};

export default MerchantProductEdit;
