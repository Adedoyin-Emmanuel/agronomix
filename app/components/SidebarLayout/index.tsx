"use client";

import { AppDispatch } from "@/app/store/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { TbMoneybag } from "react-icons/tb";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import AppHeader, { MerchantAppHeader } from "../AppHeader";
import MobileNav, { MerchantMobileNav } from "../MobileNav";
import Text from "../Text";
import Verified from "../Verified";
import Image from "next/image";

interface SidebarLayoutProps {
  className?: string;
  children?: React.ReactNode;
  showWelcomeMesage?: boolean;
}

const SidebarLayout = ({
  className,
  children,
  showWelcomeMesage,
}: SidebarLayoutProps) => {
  const currentPath = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogoutClick = async () => {
    try {
    } catch (error: any) {
      toast.error(error?.data?.message || error.error || error?.data);
    }
  };
  return (
    <section className="parent h-screen w-screen flex justify-between">
      <div
        className={`bg-zinc-100 h-screen hidden md:flex md:w-3/12  lg:w-2/12 items-center justify-start flex-col  p-0  fixed ${className} `}
      >
        <section className="sidebar-header my-3 w-11/12 p-2 ">
          <h2 className="font-bold text-[20px] capitalize flex items-center">
            Agronomix
            <div className="transform translate-y-1">
              <Image
                src={"/assets/leaf.png"}
                alt="App logo"
                width={65}
                height={65}
              />
            </div>
          </h2>
          <Text className="text-[13px] block transform -translate-y-3">
            Elevate your agro shopping experience
          </Text>
        </section>

        <section className="w-11/12 p-2">
          <Link
            href={"/user/dashboard"}
            className={`dashboard cursor-pointer  ${
              currentPath.includes("dashboard")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  transition-colors flex items-center gap-x-4  p-5 rounded my-4 hover:bg-accent duration-100 ease-in hover:text-white`}
          >
            <IoAnalytics className="w-6 h-6" />
            <Text>Dashboard</Text>
          </Link>

          <Link
            href="/user/search"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("search")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <FiSearch className="w-6 h-6" />
            <Text>Discover</Text>
          </Link>

          <Link
            href="/user/search"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("search")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <BsCart className="w-6 h-6" />
            <Text>Store</Text>
          </Link>

          <Link
            href="/user/settings"
            className={`dashboard cursor-pointer ${
              currentPath.includes("settings") ||
              currentPath.includes("profile") ||
              currentPath.includes("profile/me")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <IoSettingsOutline className="w-6 h-6" />
            <Text>Settings</Text>
          </Link>

          <Link
            href=""
            onClick={handleLogoutClick}
            className={`dashboard cursor-pointer  ${
              currentPath.includes("logout")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <FiLogOut className="w-6 h-6" />
            <Text>Logout</Text>
          </Link>
        </section>
      </div>
      <section className="w-full md:w-3/4 lg:w-5/6 md:p-8 p-2 pl-1/4 overflow-y-auto ml-auto">
        <AppHeader showWelcomeMessage={showWelcomeMesage} />
        {children}

        <section className="spacer md:hidden my-10">
          <br /> <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </section>

      <MobileNav />
    </section>
  );
};

export const MerchantSidebarLayout = ({
  className,
  children,
  showWelcomeMesage,
}: SidebarLayoutProps) => {
  const currentPath = usePathname();

  return (
    <section className="parent h-screen w-screen flex justify-between">
      <div
        className={`bg-zinc-100 h-screen hidden md:flex md:w-3/12  lg:w-2/12 items-center justify-start flex-col  p-0  fixed ${className} `}
      >
        <section className="sidebar-header my-3 w-11/12 p-2 ">
          <h2 className="font-bold text-[20px] capitalize flex items-center">
            Agronomix
            <div className="transform translate-y-1">
              <Image
                src={"/assets/leaf.png"}
                alt="App logo"
                width={65}
                height={65}
              />
            </div>
          </h2>
          <Text className="text-[13px] block transform -translate-y-3">
            Elevate your agro shopping experience
          </Text>
        </section>
        <section className="w-11/12 p-2">
          <Link
            href={"/hospital/dashboard"}
            className={`dashboard cursor-pointer  ${
              currentPath.includes("dashboard")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  transition-colors flex items-center gap-x-4  p-5 rounded my-4 hover:bg-accent duration-100 ease-in hover:text-white`}
          >
            <IoAnalytics className="w-6 h-6" />
            <Text>Dashboard</Text>
          </Link>

          <Link
            href="/hospital/search"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("search")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <IoBagOutline className="w-6 h-6" />
            <Text>Products</Text>
          </Link>

          <Link
            href="/hospital/search"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("search")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <TbMoneybag className="w-6 h-6" />
            <Text>Sales</Text>
          </Link>

          <Link
            href="/hospital/settings"
            className={`dashboard cursor-pointer ${
              currentPath.includes("settings") ||
              currentPath.includes("profile") ||
              currentPath.includes("profile/me")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <IoSettingsOutline className="w-6 h-6" />
            <Text>Settings</Text>
          </Link>
          <Link
            href="logout"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("logout")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <FiLogOut className="w-6 h-6" />
            <Text>Logout</Text>
          </Link>
        </section>
      </div>
      <section className="w-full md:w-3/4 lg:w-5/6 md:p-8 p-2 pl-1/4 overflow-y-auto ml-auto">
        <MerchantAppHeader showWelcomeMessage={showWelcomeMesage} />
        {children}

        <section className="spacer md:hidden my-10">
          <br /> <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </section>

      <MerchantMobileNav />
    </section>
  );
};

export default SidebarLayout;
