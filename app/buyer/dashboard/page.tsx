"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";

const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <h2 className="text-3xl font-bold text-primary">hello world 🚀</h2>
    </SidebarLayout>
  );
};

export default Index;
