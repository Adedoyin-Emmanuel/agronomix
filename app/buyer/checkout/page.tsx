"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";

const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold capitalize">hello checkout page</h1>
    </SidebarLayout>
  );
};

export default Index;
