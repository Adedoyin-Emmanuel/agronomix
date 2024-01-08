"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { FaAward } from "react-icons/fa6";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import {
  useGetMerchantAllProductsQuery,
  saveMerchantProductPageProducts,
} from "@/app/store/features/app/app.slice";
import Loader from "@/app/components/Loader";
import { useAppSelector } from "@/app/store/store";
import { Product } from "@/types/app.interface";

const Index = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { merchantProductPageProductInfo } = useAppSelector(
    (state) => state.app
  );

  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
    isSuccess: productSuccess,
    refetch: productRefetch,
  } = useGetMerchantAllProductsQuery({});

  useEffect(() => {
    if (productSuccess && productData) {
      const refetchData = async () => {
        const response = await productRefetch();
        return response;
      };

      refetchData().then((data) => {});
      dispatch(saveMerchantProductPageProducts(productData?.data));
      setTotalProducts(productData?.data?.length);
      console.log(productData);
    }
  }, [productData]);

  return (
    <MerchantSidebarLayout>
      {productLoading ? (
        <Loader />
      ) : (
        <section className="w-full">
          <section>
            <h3 className="font-bold text-2xl capitalize text-accent">
              products
            </h3>
            <Text className="text-sm">manage your products</Text>
          </section>

          <section
            className={`appointment-container md:items-center md:justify-center mx-auto p-3 md:p-0 w-full gap-10 ${
              totalProducts !== 0 && "flex flex-col md:grid"
            } sm:grid-cols-2 xl:grid-cols-3 my-8`}
          >
            {merchantProductPageProductInfo?.length == 0 ? (
              <Text>No product found</Text>
            ) : (
              merchantProductPageProductInfo?.map((product: Product) => {
                return (
                  <ProductCard
                    productName={product.name}
                    imageUrl={product.image}
                    productPrice={product.price}
                    unpublish={product.unpublish}
                    productSales={0}
                    productRevenue={0}
                    href={`/merchant/products/${product._id}`}
                    key={product._id}
                  />
                );
              })
            )}
          </section>
        </section>
      )}
      <Link href="/merchant/products/new" title="">
        <section className="fixed bottom-20 right-10">
          <section
            className={`w-14 h-14 flex items-center justify-center  bg-accent rounded-full shadow cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 `}
          >
            <FaPlus className="h-8 w-8 text-white" />
          </section>
        </section>
      </Link>
    </MerchantSidebarLayout>
  );
};

export default Index;
