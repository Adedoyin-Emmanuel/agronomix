"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import Text from "@/app/components/Text";
import { FaAward } from "react-icons/fa6";
const Index = () => {
  const pathname = usePathname();
  const [totalProducts, setTotalProducts] = useState<number>(10);

  return (
    <MerchantSidebarLayout>
      <section className="w-full">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            products
          </h3>
          <Text className="text-sm">manage your products</Text>
        </section>

        <section
          className={`appointment-container items-center justify-center w-full gap-10 ${
            totalProducts !== 0 && "flex flex-col md:grid"
          } sm:grid-cols-2 xl:grid-cols-3 my-8`}
        >
          <section className="product grid grid-rows-2 md:w-96 my-2  h-80 border border-accent rounded cursor-pointer transform-gpu hover:scale-105 duration-150 ease-in">
            <section className="image">
              <img
                src={"/assets/chicken.jpg"}
                alt="product"
                className="w-full h-full object-cover"
              />
            </section>

            <section className="p-1">
              <section className="title my-2">
                <p className="capitalize font-bold">Fresh chicken</p>
              </section>

              <section className="rating flex items-center gap-x-1">
                <Text className="">Sales:</Text>

                <p className="font-bold">50</p>
              </section>

              <section className="price flex items-center gap-x-1">
                <Text className="">Revenue:</Text>

                <p className="font-bold">#50,000</p>
              </section>

              <section className="breaker border-t-[1px] border-primary w-full mt-2"></section>

              <section className="price flex items-center justify-between p-2">
                <h2 className="font-bold text-[18px]">#10,000</h2>
                <section className="bookmark">
                  <FaAward className="w-5 h-5 cursor-pointer text-red-500" />
                </section>
              </section>
            </section>
          </section>

          <section className="product grid grid-rows-2 md:w-96 my-2  h-80 border border-accent rounded cursor-pointer transform-gpu hover:scale-105 duration-150 ease-in">
            <section className="image">
              <img
                src={"/assets/potato.jpg"}
                alt="product"
                className="w-full h-full object-cover"
              />
            </section>

            <section className="p-1">
              <section className="title my-2">
                <p className="capitalize font-bold">Sweet Potato</p>
              </section>

              <section className="rating flex items-center gap-x-1">
                <Text className="">Sales:</Text>

                <p className="font-bold">10</p>
              </section>

              <section className="price flex items-center gap-x-1">
                <Text className="">Revenue:</Text>

                <p className="font-bold">#10,000</p>
              </section>

              <section className="breaker border-t-[1px] border-primary w-full mt-2"></section>

              <section className="price flex items-center justify-between p-2">
                <h2 className="font-bold text-[18px]">#1,000</h2>
                <section className="bookmark">
                  <FaAward className="w-5 h-5 cursor-pointer text-primary" />
                </section>
              </section>
            </section>
          </section>

          <section className="product grid grid-rows-2 md:w-96 my-2  h-80 border border-accent rounded cursor-pointer transform-gpu hover:scale-105 duration-150 ease-in">
            <section className="image">
              <img
                src={"/assets/grapes.jpg"}
                alt="product"
                className="w-full h-full object-cover"
              />
            </section>

            <section className="p-1">
              <section className="title my-2">
                <p className="capitalize font-bold">Grapes</p>
              </section>

              <section className="rating flex items-center gap-x-1">
                <Text className="">Sales:</Text>

                <p className="font-bold">100</p>
              </section>

              <section className="price flex items-center gap-x-1">
                <Text className="">Revenue:</Text>

                <p className="font-bold">#100,000</p>
              </section>

              <section className="breaker border-t-[1px] border-primary w-full mt-2"></section>

              <section className="price flex items-center justify-between p-2">
                <h2 className="font-bold text-[18px]">#1,000</h2>
                <section className="bookmark">
                  <FaAward className="w-5 h-5 cursor-pointer text-primary" />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default Index;
