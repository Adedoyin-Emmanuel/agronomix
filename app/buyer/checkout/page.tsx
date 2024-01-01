"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";

const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout>
      <section className="w-full">
        <section className="flex items-center justify-between my-3">
          <section>
            <h3 className="font-bold text-2xl capitalize text-accent">
              checkout
            </h3>
            <Text className="text-sm ">pay for your groceries</Text>
          </section>
          <section>
            <Button>continue shopping</Button>
          </section>
        </section>
      </section>
    </SidebarLayout>
  );
};

export default Index;
