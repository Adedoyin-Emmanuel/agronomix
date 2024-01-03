"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
const Index = () => {
  const pathname = usePathname();

  return (
    <MerchantSidebarLayout>
      <section className="w-full">
        <section>
          <h3 className="font-bold text-2xl capitalize text-accent">
            products
          </h3>
          <Text className="text-sm">manage your products</Text>
        </section>
      </section>
    </MerchantSidebarLayout>
  );
};

export default Index;
