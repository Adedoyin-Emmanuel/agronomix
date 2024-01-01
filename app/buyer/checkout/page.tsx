"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <section className="w-full">
        <section className="flex items-center justify-between my-3">
          <section>
            <h3 className="font-bold text-2xl capitalize text-accent">
              checkout
            </h3>
            <Text className="text-sm ">pay for your groceries</Text>
          </section>
          <section>
            <Button>continue shopping</Button>
          </section>
        </section>
        <br />
        <br />
        <br />
        <main className="grid grid-cols-2 mx-auto">
          <section className="w-full products bg-red-500">
            <section className="product rounded border border-accent">
              <section className="image">
                <img src="/assets/chicken.jpg" alt="product image" />
              </section>
              <section className="details">
                <section className="header">
                  <Text className="font-bold">Fresh chicken</Text>
                  <Text className="font-bold">#25</Text>
                </section>

                <section className="merchant">
                  <Text className="text-sm underline" noCapitalize>
                    @emmysoft
                  </Text>
                </section>
                <section className="footer">
                  <Text className="font-bold">Qty: 1</Text>
                  <Text className="underline">Remove</Text>
                </section>
              </section>
            </section>
          </section>

          <form className="w-full p-3 payment-details bg-green-500 ">
            <h3 className="font-bold text-[18px] capitalize">pay with</h3>

            <section className="flex items-center gap-x-3">
              <div className="w-20 h-20 bg-accent rounded"></div>
              <div className="w-20 h-20 bg-accent rounded"></div>
              <div className="w-20 h-20 bg-accent rounded"></div>
            </section>

            <section className="my-3">
              <label htmlFor="cardName" className="capitalize block my-2">
                name on card
              </label>
              <Input
                type="text"
                placeholder="Enter the name on your card"
                name="cardName"
              />
            </section>

            <section className="my-3">
              <label htmlFor="cardNumber" className="capitalize block my-2">
                card number
              </label>
              <Input type="number" placeholder="Enter card number" />
            </section>

            <section className="my-3">
              <label htmlFor="cardDate" className="capitalize block my-2">
                card expiry date
              </label>
              <Input type="number" placeholder="MM/YY" />
            </section>
            <hr />
            <Text className="font-bold text-[18px]">Contact information</Text>
            <br />

            <section className="my-3">
              <label htmlFor="email" className="capitalize block my-2">
                Email
              </label>
              <Input type="text" placeholder="Enter your email" name="email" />
            </section>

            <section className="my-3">
              <label htmlFor="email" className="text-md block my-2">
                country
              </label>
              <select
                className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
                name="country"
              >
                <option value="nigeria">Nigeria</option>
              </select>
            </section>
          </form>
        </main>
      </section>
    </SidebarLayout>
  );
};

export default Index;
