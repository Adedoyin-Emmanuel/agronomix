"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { BsCart } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
import Button from "@/app/components/Button";
import {
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

const Dashboard = () => {
  const pathname = usePathname();

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

  return (
    <MerchantSidebarLayout showWelcomeMesage>
      <section className="general-container w-full mx-auto items-start flex flex-col xl:flex-row gap-x-5">
        <section className="first-section w-full xl:w-8/12  md:flex flex-col items-center justify-center ">
          <section className="stats-container grid p-1 lg:grid-cols-3 gap-10 w-full">
            <section className="bg-gray-100 h-28 w-52 rounded my-5 flex items-center flex-col justify-around cursor-pointer hover:bg-accent hover:text-white transition-colors duration-100 ease-in">
              <BsCart className="w-8 h-8" />
              <Text>{0} Orders</Text>
            </section>

            <section className="bg-gray-100 h-28 w-52 rounded my-5 flex items-center flex-col justify-around cursor-pointer hover:bg-accent hover:text-white transition-colors duration-100 ease-in">
              <SlBadge className="w-8 h-8" />
              <Text>{0} Reviews</Text>
            </section>

            <section className="bg-gray-100 h-28 w-52 rounded my-5 flex items-center flex-col justify-around cursor-pointer hover:bg-accent hover:text-white transition-colors duration-100 ease-in">
              <TbMoneybag className="w-8 h-8" />
              <Text>#{0} Sales</Text>
            </section>
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

            <section className="collections my-5 w-full flex items-center justify-center">
              <Text>No products found!</Text>
            </section>

            <Button className="text-center">View all products</Button>
          </section>
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default Dashboard;
