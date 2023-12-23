"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <h2 className="text-2xl font-bold text-primary capitalize">
        hello settings page 🚀
      </h2>
    </SidebarLayout>
  );
};

export default Index;
