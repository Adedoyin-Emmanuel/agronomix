"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
const Index = () => {
  const pathname = usePathname();

  return (
    <SidebarLayout showWelcomeMesage>
      <section className="first-section">
        <section className="stats">
          <section className="total-orders"></section>
          <section className="total-views"></section>
          <section className="total-collections"></section>
        </section>
        <section className="transaction-history"></section>
      </section>
      <section className="second-section">
        <section className="recent-store"></section>
      </section>
    </SidebarLayout>
  );
};

export default Index;
