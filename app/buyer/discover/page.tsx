"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
const Discover = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <section className="w-full">
        <h3 className="font-bold text-2xl capitalize text-accent">
          discover products
        </h3>
        <Text className="text-sm ">Search, save and shop agro products</Text>
        <form className="flex items-center justify-center mt-5">
          <input
            type="text"
            placeholder="Discover products"
            name="productName"
            className="bg-[#F5F5F5] capitalize p-5 rounded-full w-11/12 lg:w-8/12  outline-none border-2 border-accent transition-all duration-150 ease-in my-5 text-sm"
          ></input>
        </form>
      </section>
    </SidebarLayout>
  );
};

export default Discover;
