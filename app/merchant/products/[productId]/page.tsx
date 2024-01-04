"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import Text from "@/app/components/Text";
import { FaAward } from "react-icons/fa6";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
const ProductId = () => {
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

        <main className="w-full flex items-center justify-center p-2">
          <section className="lg:w-7/12 w-full product flex flex-col">
            <br />
            <section className="border border-accent rounded">
              <section className="product-image w-full flex items-center justify-center">
                <img
                  src="/assets/chicken.jpg"
                  className="object-cover w-full border-b-accent"
                />
              </section>

              <section className="grid md:grid-cols-2 w-full">
                <section className="border-r-[1px] border-accent">
                  <h1 className="text-[20px] font-bold capitalize p-2 border-y-[1px] border-accent">
                    live chicken
                  </h1>
                  <section className="w-full flex p-2 items-center justify-between flex-wrap border-b-[1px] border-accent">
                    <h2 className="text-[20px] font-bold">#10k</h2>

                    <section className="flex items-center gap-x-2 ">
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

                <section className="p-1 border-t-[1px] border-accent">
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
      <Link href="/" title="">
        <section className="fixed bottom-20 right-10">
          <section
            className={`w-14 h-14 flex items-center justify-center  bg-accent rounded-full shadow cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 `}
          >
            <FaPen className="h-8 w-8 text-white" />
          </section>
        </section>
      </Link>
    </MerchantSidebarLayout>
  );
};

export default ProductId;
