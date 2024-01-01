"use client";

import React from "react";
import SidebarLayout from "@/app/components/SidebarLayout";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import Loader from "@/app/components/Loader";
import Input from "@/app/components/Input";
import { FaStar } from "react-icons/fa";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <SidebarLayout>
      <section className="w-full">
        <form className="flex items-center justify-center p-2 mt-5 flex-col  mx-auto w-full lg:w-8/12 ">
          <input
            type="text"
            placeholder="Discover products"
            name="productName"
            className="bg-[#F5F5F5] capitalize p-5 rounded-full lg:w-11/12 w-full outline-none border-2 border-accent transition-all duration-150 ease-in my-5 text-sm"
          />
        </form>

        <main className="w-full flex items-center justify-center p-2">
          <section className="lg:w-7/12 w-full product flex flex-col">
            <section className="p-3 w-full md:flex hidden items-center justify-between border border-accent rounded ">
              <section className="flex gap-x-4">
                <h1 className="text-[20px] font-bold capitalize text-accent">
                  #10k
                </h1>
                <h1 className="text-[20px] font-bold capitalize">
                  healthy live chicken
                </h1>
              </section>

              <section className="flex items-center gap-x-2 justify-between">
                <section className="flex items-center gap-x-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </section>

                <p className="text-sm block">(28)</p>

                <Button>add to cart</Button>
              </section>
            </section>
            <br />
            <section className="border border-accent rounded">
              <section className="product-image w-full flex items-center justify-center">
                <img
                  src="/assets/chicken.jpg"
                  className="object-cover w-full border-b-accent"
                />
              </section>

              <section className="product-body grid md:grid-cols-2 w-full">
                <section className="product-description border-r-[1px] border-accent">
                  <h1 className="text-[20px] font-bold capitalize p-2 border-y-[1px] border-accent">
                    live chicken
                  </h1>
                  <section className="w-full flex p-2 items-center justify-between flex-wrap border-b-[1px] border-accent">
                    <h2 className="text-[20px] font-bold">#10k</h2>
                    <section className="merchant flex items-center gap-x-1 ">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-7 w-7"
                      />
                      <Text className="text-sm font-bold" noCapitalize>
                        @emmysoft
                      </Text>
                    </section>
                    <section className="rating flex items-center gap-x-2 ">
                      <section className="flex items-center gap-x-1">
                        <FaStar className="text-accent" />
                      </section>
                      <Text className="text-sm">28 ratings</Text>
                    </section>
                  </section>
                  <Text className="p-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus eveniet exercitationem perspiciatis neque quis
                    similique obcaecati quia ad tempore blanditiis, nostrum
                    voluptatibus autem officiis nobis quam unde sapiente iusto
                    fugit.
                  </Text>
                </section>

                <section className="product-cart p-1 border-t-[1px] border-accent">
                  <form className="p-2">
                    <label htmlFor="price" className="block text-sm my-2">
                      Name a fair price
                    </label>
                    <Input
                      placeholder="Enter price"
                      type="number"
                      className="my-4 py-2"
                    />
                    <Button className="my-4">add to cart</Button>
                  </form>
                  {/* <section className="rating">
                    <section className="header">
                      <h3 className="capitalize">ratings</h3>
                      <section className="rating-star">
                        <FaStar />
                        4.8 (28 ratings)
                      </section>
                    </section>
                    <section className="rating-body"></section>
                  </section> */}
                </section>
              </section>
            </section>
          </section>
        </main>
      </section>
    </SidebarLayout>
  );
};

export default page;
