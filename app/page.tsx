import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Text from "./components/Text";
import React, { useState } from "react";

export default function Home() {
  return (
    <section>
      <Navbar />
      <section className="m-auto w-full">
        <div className="container mx-auto py-5 md:py-16 px-4  lg:flex lg:items-start overflow-x-hidden">
          <section className="hero flex items-center justify-center flex-col">
            <h1 className="capitalize font-bold lg:text-4xl text-3xl text-center">
              elevate your agro shopping experience
            </h1>
            <Text className="my-3 text-center">
              Experience agro-shopping like never before!
            </Text>

            <Button className="rounded-[30px] w-60">
              <Link href={"/auth/signup"}>get started</Link>
            </Button>

            <div className="carousel carousel-end rounded-box my-5 border-2 border-primary">
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/corn.png" alt="Corn" />
              </div>
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/cassava.png" alt="Drink" />
              </div>
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/fruit-1.png" alt="Drink" />
              </div>
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/fruit-2.png" alt="Drink" />
              </div>
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/plough.png" alt="Drink" />
              </div>
              <div className="carousel-item border-[1px] border-primary">
                <img src="/assets/roasted-corn.png" alt="Drink" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
