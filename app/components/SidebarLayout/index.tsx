"use client";

import { AppDispatch } from "@/app/store/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { TbMoneybag } from "react-icons/tb";
import { useDispatch } from "react-redux";
import AppHeader, { MerchantAppHeader } from "../AppHeader";
import MobileNav, { MerchantMobileNav } from "../MobileNav";
import Text from "../Text";
import Image from "next/image";
import { logoutUser } from "@/app/store/features/auth/auth.slice";
import { useLogoutMutation } from "@/app/store/features/app/app.slice";
import { resetApp } from "@/app/store/features/app/app.slice";

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
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogoutClick = async () => {
    try {
      const response = await logout({}).unwrap();
      if (response) {
        if (response) {
          toast.success(response.message);
          dispatch(logoutUser({}));
          dispatch(resetApp({}));
          router.push("/auth/login");
        }
      }
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
            href={"/buyer/dashboard"}
            className={`cursor-pointer  ${
              currentPath.includes("dashboard")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  transition-colors flex items-center gap-x-4  p-5 rounded my-4 hover:bg-accent duration-100 ease-in hover:text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            <Text>Dashboard</Text>
          </Link>

          <Link
            href="/buyer/discover"
            className={`cursor-pointer  ${
              currentPath.includes("discover") ||
              currentPath.includes("checkout")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <Text>Discover</Text>
          </Link>

          <Link
            href="/buyer/store"
            className={`cursor-pointer  ${
              currentPath.includes("store")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <Text>Store</Text>
          </Link>

          <Link
            href="/buyer/settings"
            className={`cursor-pointer ${
              currentPath.includes("settings") ||
              currentPath.includes("profile") ||
              currentPath.includes("profile/me")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <Text>Settings</Text>
          </Link>

          <Link
            href=""
            onClick={handleLogoutClick}
            className={`cursor-pointer  ${
              currentPath.includes("logout")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

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
    const dispatch = useDispatch<AppDispatch>();
    const [logout] = useLogoutMutation();
    const router = useRouter();




  const handleLogoutClick = async () => {
    try {
      const response = await logout({}).unwrap();
      if (response) {
        if (response) {
          toast.success(response.message);
          dispatch(logoutUser({}));
          dispatch(resetApp({}));
          router.push("/auth/login");
        }
      }
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
            href={"/merchant/dashboard"}
            className={`cursor-pointer  ${
              currentPath.includes("dashboard")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  transition-colors flex items-center gap-x-4  p-5 rounded my-4 hover:bg-accent duration-100 ease-in hover:text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            <Text>Dashboard</Text>
          </Link>

          <Link
            href="/merchant/products"
            className={`cursor-pointer  ${
              currentPath.includes("products")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <Text>Products</Text>
          </Link>

          <Link
            href="/merchant/sales"
            className={`cursor-pointer  ${
              currentPath.includes("sales")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <TbMoneybag className="w-6 h-6" />
            <Text>Sales</Text>
          </Link>

          <Link
            href="/merchant/settings"
            className={`cursor-pointer ${
              currentPath.includes("settings") ||
              currentPath.includes("profile") ||
              currentPath.includes("profile/me")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <Text>Settings</Text>
          </Link>
          <Link
            href=""
            onClick={handleLogoutClick}
            className={`cursor-pointer  ${
              currentPath.includes("logout")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

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
