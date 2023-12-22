"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import Text from "../Text";

interface MobileNavProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileNav = ({ className, children, ...others }: MobileNavProps) => {
  const currentPath = usePathname();
  return (
    <section
      className={`w-screen flex items-center justify-between fixed bottom-0 left-0 md:hidden  bg-gray-100 h-20 z-10 p-2 ${className}`}
      {...others}
    >
      {children}

      <Link
        href={"/buyer/dashboard"}
        className={`${
          currentPath.includes("dashboard") || currentPath.includes("search")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoAnalytics className="h-5 w-5" />
        <Text className="text-[12px]">Dashboard</Text>
      </Link>

      <Link
        href={"/buyer/discover"}
        className={`${
          currentPath.includes("appointments") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <FiSearch className="h-5 w-5" />
        <Text className="text-[12px]">Discover</Text>
      </Link>

      <Link
        href={"/buyer/store"}
        className={`${
          currentPath.includes("messages") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <BsCart className="h-5 w-5" />
        <Text className="text-[12px]">Store</Text>
      </Link>

      <Link
        href={"/buyer/settings"}
        className={`${
          currentPath.includes("settings") ||
          currentPath.includes("profile") ||
          currentPath.includes("profile/me")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoSettingsOutline className="h-5 w-5" />
        <Text className="text-[12px]">Settings</Text>
      </Link>
    </section>
  );
};

export const MerchantMobileNav = ({
  className,
  children,
  ...others
}: MobileNavProps) => {
  const currentPath = usePathname();
  return (
    <section
      className={`w-screen flex items-center justify-between fixed bottom-0 left-0 md:hidden  bg-gray-100 h-20 z-10 p-2 ${className}`}
      {...others}
    >
      {children}

      <Link
        href={"/merchant/dashboard"}
        className={`${
          currentPath.includes("dashboard") || currentPath.includes("search")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoAnalytics className="h-5 w-5" />
        <Text className="text-[12px]">Dashboard</Text>
      </Link>

      <Link
        href={"/buyer/appointments"}
        className={`${
          currentPath.includes("appointments") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoBagOutline className="h-5 w-5" />
        <Text className="text-[12px]">Products</Text>
      </Link>

      <Link
        href={"/merchant/sales"}
        className={`${
          currentPath.includes("messages") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <TbMoneybag className="h-5 w-5" />
        <Text className="text-[12px]">Sales</Text>
      </Link>

      <Link
        href={"/merchant/settings"}
        className={`${
          currentPath.includes("settings") ||
          currentPath.includes("profile") ||
          currentPath.includes("profile/me")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoSettingsOutline className="h-5 w-5" />
        <Text className="text-[12px]">Settings</Text>
      </Link>
    </section>
  );
};

export default MobileNav;
