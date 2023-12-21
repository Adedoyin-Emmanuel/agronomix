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

            <Button className="rounded-[30px] w-[16.5rem]">get started</Button>

            <div className="carousel carousel-end rounded-box my-5">
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  alt="Drink"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  alt="Drink"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
