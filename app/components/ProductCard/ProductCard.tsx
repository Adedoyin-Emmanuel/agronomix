"use client";
import React from "react";
import Text from "../Text";
import Link from "next/link";

interface ProductCardProps {
  className?: string;
  imageUrl: string;
  productName: string;
  productSales: number;
  productRevenue: number;
  productPrice: number;
  isPublished: boolean;
  href: string;
}

const ProductCard = ({
  className,
  imageUrl,
  productName,
  productSales,
  productRevenue,
  productPrice,
  isPublished,
  href,
}: ProductCardProps) => {
  const publishedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-accent cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );

  const notPublishedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-red-500 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );

  return (
    <Link href={href}>
      <section
        className={`grid grid-rows-2 md:w-96 my-2  h-80 border border-accent rounded cursor-pointer transform-gpu hover:scale-105 duration-150 ease-in ${className}`}
      >
        <section className="image">
          <img
            src={imageUrl}
            alt={`An image related to ${productName}`}
            className="w-full h-full object-cover"
          />
        </section>

        <section className="p-1">
          <section className="title my-2">
            <p className="capitalize font-bold">{productName}</p>
          </section>

          <section className="rating flex items-center gap-x-1">
            <Text className="">Sales:</Text>

            <p className="font-bold">{productSales}</p>
          </section>

          <section className="price flex items-center gap-x-1">
            <Text className="">Revenue:</Text>

            <p className="font-bold">₦ {productRevenue}</p>
          </section>

          <section className="breaker border-t-[1px] border-primary w-full mt-2"></section>

          <section className="price flex items-center justify-between p-2">
            <h2 className="font-bold text-[18px]">₦ {productPrice}</h2>
            <section className="bookmark">
              {isPublished ? publishedIcon : notPublishedIcon}
            </section>
          </section>
        </section>
      </section>
    </Link>
  );
};

export default ProductCard;
