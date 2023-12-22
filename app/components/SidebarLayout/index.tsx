"use client";

import { AppDispatch } from "@/app/store/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
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
            href="/user/appointments"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("appointments")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <BsCameraVideo className="w-6 h-6" />
            <Text>Appointments</Text>
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
            <Text>Find Hospitals</Text>
          </Link>

          <Link
            href="/user/messages"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("messages")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <BiMessageRoundedDots className="w-6 h-6" />
            <Text>Messages</Text>
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
        <section className="sidebar-header my-4 w-11/12 p-2">
          <h2 className="font-bold text-[20px] capitalize flex items-center">
            caresync
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="dodgerblue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z"
                  fill="#C0A3F5"
                ></path>
              </svg>
            </span>
          </h2>
          <Text className="text-[13px]">Bridging health with technology</Text>
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
            href="/hospital/appointments"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("appointments")
                ? "text-white bg-accent"
                : "bg-gray-200"
            }  hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <BsCameraVideo className="w-6 h-6" />
            <Text>Appointments</Text>
          </Link>

          <Link
            href="/hospital/search"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("search")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <FiSearch className="w-6 h-6" />
            <Text>Find Users</Text>
          </Link>

          <Link
            href="/hospital/messages"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("messages")
                ? "text-white bg-accent"
                : "bg-gray-200"
            } hover:bg-accent duration-100 ease-in hover:text-white transition-colors flex items-center gap-x-4 p-5 rounded my-4`}
          >
            <BiMessageRoundedDots className="w-6 h-6" />
            <Text>Messages</Text>
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
