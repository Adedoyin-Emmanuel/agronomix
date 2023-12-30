"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
const Index = () => {
  const pathname = usePathname();

  return (
    <MerchantSidebarLayout>
      <h2 className="text-2xl font-bold text-primary capitalize">
        hello merchant settings page 🚀
      </h2>
    </MerchantSidebarLayout>
  );
};

export default Index;
