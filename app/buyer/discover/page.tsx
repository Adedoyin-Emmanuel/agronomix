"use client";
import React, { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { IoFilter } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

const Discover = () => {
  const pathname = usePathname();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [defaultIcon, setDefaultIcon] = useState(
    <IoFilter className="w-6 h-6 text-white" />
  );

  const filterContainerRef = useRef<HTMLDivElement | any>();

  const handleShowFilter = () => {
    const filterContainer = filterContainerRef.current;
    setShowFilter(!showFilter);

    if (showFilter) {
      if (filterContainer) {
        filterContainer.classList.remove("fade-out");
        filterContainer.classList.add("fade-in");

        //change the filter icon to cancel
        setDefaultIcon(<ImCancelCircle className="h-6 w-6 text-white" />);
      }
    } else {
      if (filterContainer) {
        filterContainer.classList.remove("fade-in");
        filterContainer.classList.add("fade-out");

        //change the filter icon to filter
        setDefaultIcon(<IoFilter className="w-6 h-6 text-white" />);
      }
    }
  };

  return (
    <SidebarLayout>
      <section className="w-full">
        <h3 className="font-bold text-2xl capitalize text-accent">
          discover products
        </h3>
        <Text className="text-sm ">Search, save and shop agro products</Text>
        <form className="flex items-center justify-center mt-5 flex-col">
          <input
            type="text"
            placeholder="Discover products"
            name="productName"
            className="bg-[#F5F5F5] capitalize p-5 rounded-full w-11/12 lg:w-10/12  outline-none border-2 border-accent transition-all duration-150 ease-in my-5 text-sm"
          />

          <section className="filters md:flex hidden gap-x-3 mt-2">
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              all
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              fruits & vegetables
            </span>

            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Roots & tubers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Dairy Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Equipments
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Livestock supplies
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Fertilizers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Organic Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Pesticides{" "}
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Others
            </span>
          </section>

          <section className="md:hidden w-11/12 flex items-end justify-end p-2">
            <section
              className="bg-accent p-2 rounded"
              onClick={handleShowFilter}
            >
              {defaultIcon}
            </section>
          </section>
          <section
            className="md:hidden hidden w-11/12 filters flex-col rounded p-2 border border-accent gap-y-2"
            ref={filterContainerRef}
          >
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              all
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              fruits & vegetables
            </span>

            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Roots & tubers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Dairy Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Equipments
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Livestock supplies
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Fertilizers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Organic Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Pesticides{" "}
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Others
            </span>
          </section>
        </form>
      </section>
    </SidebarLayout>
  );
};

export default Discover;
