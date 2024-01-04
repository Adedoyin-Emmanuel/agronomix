"use client";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Text from "./components/Text";
import React, { useState } from "react";
import ScrollCarousel from "scroll-carousel-react";

export default function Home() {
  const images = [
    "/assets/chicken.jpg",
    "/assets/fruit-2.png",
    "/assets/meat.jpg",
    "/assets/potato.jpg",
    "/assets/corn.png",
    "/assets/cassava.png",
  ];

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

            <section className="w-60">
              <Button className="rounded-[30px] w-60">
                <Link href={"/auth/signup"}>get started</Link>
              </Button>
            </section>
            <ScrollCarousel
              autoplay
              autoplaySpeed={8}
              speed={7}
              onReady={() => console.log("I love C#")}
              className="carousel carousel-end rounded-box my-5 border-2 border-primary p-0 m-0 "
            >
              {images.map((item) => (
                <div
                  key={item}
                  className="carousel-item border-[1px] border-primary w-full h-full p-0 m-0"
                >
                  <img
                    src={item}
                    alt="caurosel image"
                    className="object-cover p-0 m-0 caurosel-image"
                  />
                </div>
              ))}
            </ScrollCarousel>
          </section>
        </div>
      </section>
    </section>
  );
}
