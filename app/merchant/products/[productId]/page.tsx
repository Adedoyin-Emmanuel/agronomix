"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import { FaStar } from "react-icons/fa";
import Text from "@/app/components/Text";
import Link from "next/link";
import { Product } from "@/types/app.interface";
import { useGetProductByIdQuery } from "@/app/store/features/app/app.slice";
import Loader from "@/app/components/Loader";

const ProductId = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const { isLoading, isError, data, refetch, isSuccess } =
    useGetProductByIdQuery(params.productId);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (isSuccess && data) {
      const refetchData = async () => {
        const response = await refetch();
        return response;
      };

      refetchData().then((data) => {});
      console.log(data);
      setProduct(data?.data);
    }
  }, [data, isLoading]);

  return (
    <MerchantSidebarLayout>
      {isLoading ? (
        <Loader />
      ) : (
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
                    src={product?.image!}
                    className="object-cover w-full border-b-accent"
                  />
                </section>

                <section className="grid md:grid-cols-2 w-full">
                  <section className="border-r-[1px] border-accent">
                    <h1 className="text-[20px] font-bold capitalize p-2 border-y-[1px] border-accent">
                      {product?.name!}
                    </h1>
                    <section className="w-full flex p-2 items-center justify-between flex-wrap border-b-[1px] border-accent">
                      <h2 className="text-[20px] font-bold">
                        ₦{product?.price!}
                      </h2>

                      <section className="flex items-center gap-x-2 ">
                        <section className="flex items-center gap-x-1">
                          <FaStar className="text-accent" />
                        </section>
                        <Text className="text-sm">
                          {product?.rating!} ratings
                        </Text>
                      </section>
                    </section>
                    <p className="p-4 text-sm">{product?.description}</p>
                  </section>

                  <section className="p-1 border-t-[1px] border-accent flex items-center justify-center p-5">
                    <section className="w-full flex items-center justify-center">
                      {product?.unpublish ? (
                        <section className="status-badge text-black rounded bg-yellow-300 flex items-center justify-center h-10 w-32">
                          <Text className="text-[12px] font-bold">
                            unpublished
                          </Text>
                        </section>
                      ) : (
                        <section className="status-badge text-black rounded bg-green-300 flex items-center justify-center h-10 w-32">
                          <Text className="text-[12px] font-bold">
                            published
                          </Text>
                        </section>
                      )}
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </main>
        </section>
      )}
      <Link href={`/merchant/products/${params.productId}/edit`} title="">
        <section className="fixed bottom-20 right-10">
          <section
            className={`w-14 h-14 flex items-center justify-center  bg-accent rounded-full shadow cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </section>
        </section>
      </Link>
    </MerchantSidebarLayout>
  );
};

export default ProductId;
