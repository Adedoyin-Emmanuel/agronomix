"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import {
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/store/store";
import { AppDispatch } from "@/app/store/store";
import Skeleton from "@/app/components/Skeleton/Skeleton";
import ProductLabel from "@/app/components/ProductLabel/ProductLabel";

const Dashboard = () => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { userAuthInfo } = useAppSelector((state) => state.auth);

  const transactions = [
    {
      id: 1,
      icon: <FaShoppingCart />,
      description: "Purchase of Seeds",
      amount: -500.0,
    },
    {
      id: 2,
      icon: <FaMoneyCheckAlt />,
      description: "Crop Sale Income",
      amount: 3500.0,
    },
    {
      id: 3,
      icon: <FaCreditCard />,
      description: "Equipment Purchase",
      amount: -1200.0,
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      description: "Harvest Bonus",
      amount: 200.0,
    },
  ];

  // Dummy TransactionHistory component
  const TransactionHistory = () => {
    return (
      <div className=" w-full mt-8 rounded-md">
        <h2 className="text-[20px] font-bold mb-6">Transaction History</h2>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center cursor-pointer justify-between border-transparent bg-gray-100 border-[1px] hover:border-accent transition-colors duration-100 ease-in p-4 rounded-md mb-4"
            >
              <div className="flex items-center">
                <span className="mr-4 text-green-500 text-xl">
                  {transaction.icon}
                </span>
                <div>
                  <p className="text-md font-medium">
                    {transaction.description}
                  </p>
                  <p
                    className={`text-sm ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-gray-500">
                {new Date().toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const totalSales = 150;
  const totalRevenue = 450000;

  return (
    <MerchantSidebarLayout showWelcomeMesage>
      <section className="general-container w-full mx-auto items-start flex flex-col xl:flex-row gap-x-5">
        <section className="first-section w-full xl:w-8/12  md:flex flex-col items-center justify-center ">
          <section className="stats-container grid p-1 lg:grid-cols-3 gap-10 w-full my-4">
            {userAuthInfo?.orders ? (
              <section className="border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                <section>
                  <h4 className="font-bold">Total Orders</h4>
                  <Text className="text-xl">
                    {userAuthInfo?.orders?.length}
                  </Text>
                </section>
              </section>
            ) : (
              <Skeleton className="w-auto h-24 rounded" />
            )}

            {userAuthInfo?.reviews ? (
              <section className="border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <section>
                  <h4 className="font-bold">Total Reviews</h4>
                  <Text className="text-xl">
                    {userAuthInfo?.reviews.length}
                  </Text>
                </section>
              </section>
            ) : (
              <Skeleton className="w-auto h-24 rounded" />
            )}

            {userAuthInfo?.products ? (
              <section className="border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <section>
                  <h4 className="font-bold">Total Products</h4>
                  <Text className="text-xl">
                    {userAuthInfo.products.length}
                  </Text>
                </section>
              </section>
            ) : (
              <Skeleton className="w-auto h-24 rounded" />
            )}
          </section>

          <section className="transaction-history w-full">
            <TransactionHistory />
          </section>
        </section>
        <section className="second-section w-full xl:w-4/12 mt-16 md:mt-0 grid grid-cols-1 items-center justify-center p-2">
          <section className="buyer-collection">
            <h3 className="font-bold capitalize text-[18px] md:text-[20px]">
              your products
            </h3>

            <section className="my-5">
              <ProductLabel
                href="#"
                productImage="/assets/potato.jpg"
                productName="Potato"
                isPublished
              />
            </section>

            <Button className="text-center">View all products</Button>
          </section>
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default Dashboard;
