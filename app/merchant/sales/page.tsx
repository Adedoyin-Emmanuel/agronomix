"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { TbMoneybag } from "react-icons/tb";

import {
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

const SalesPage = () => {
  const pathname = usePathname();

  const totalSales = 150;
  const totalRevenue = 450000;

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
  const SalesHistory = () => {
    return (
      <div className=" w-full mt-8 rounded-md">
        <h2 className="text-[20px] font-bold mb-6">Sales History</h2>
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

  return (
    <MerchantSidebarLayout>
      <section className="w-full">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            Sales Overview
          </h3>
          <Text className="text-sm">
            View and analyze your sales performance.
          </Text>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 my-4">
          <section className="sales-info  border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
            <TbMoneybag className="mr-2 h-8 w-8" />
            <section>
              <h4 className="font-bold">Total Sales</h4>
              <p className="text-xl">{totalSales} units</p>
            </section>
          </section>

          <section className="sales-info  border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <section>
              <h4 className="font-bold">Total Revenue</h4>
              <p className="text-xl">#{totalRevenue}</p>
            </section>
          </section>

          <section className="sales-info  border-[1px] border-accent hover:bg-accent hover:text-white duration-200 transition ease-in-out cursor-pointer p-4 rounded flex items-center gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>

            <section>
              <h4 className="font-bold">Total Customers</h4>
              <p className="text-xl">2.5k</p>
            </section>
          </section>
        </section>

        <br />

        <section className="mt-6 lg:w-8/12">
          <SalesHistory />
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default SalesPage;
