"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
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
        href={"/user/dashboard"}
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
        href={"/user/appointments"}
        className={`${
          currentPath.includes("appointments") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <BsCameraVideo className="h-5 w-5" />
        <Text className="text-[12px]">Appointments</Text>
      </Link>

      <Link
        href={"/user/messages"}
        className={`${
          currentPath.includes("messages") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <BiMessageRoundedDots className="h-5 w-5" />
        <Text className="text-[12px]">Messages</Text>
      </Link>

      <Link
        href={"/user/settings"}
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
        href={"/hospital/dashboard"}
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
        href={"/hospital/appointments"}
        className={`${
          currentPath.includes("appointments") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <BsCameraVideo className="h-5 w-5" />
        <Text className="text-[12px]">Appointments</Text>
      </Link>

      <Link
        href={"/hospital/messages"}
        className={`${
          currentPath.includes("messages") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <BiMessageRoundedDots className="h-5 w-5" />
        <Text className="text-[12px]">Messages</Text>
      </Link>

      <Link
        href={"/hospital/settings"}
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
