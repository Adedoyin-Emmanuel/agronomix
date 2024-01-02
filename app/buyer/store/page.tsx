"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import { FaTrash, FaEye } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  merchant: {
    name: string;
    profileLink: string;
  };
  price: number;
}

const Store: React.FC = () => {
  const pathname = usePathname();

  // Sample data for user's collection
  const [collections, setCollections] = useState<Product[]>([
    {
      id: 1,
      name: "Fresh Chicken",
      image: "/assets/chicken.jpg",
      merchant: {
        name: "@emmysoft",
        profileLink: "https://example.com/emmysoft",
      },
      price: 25,
    },
    {
      id: 2,
      name: "Sweet Potato",
      image: "/assets/potato.jpg",
      merchant: {
        name: "@organicfarm",
        profileLink: "https://example.com/organicfarm",
      },
      price: 15,
    },
  ]);

  return (
    <SidebarLayout>
      <section className="w-full">
        <section className="flex items-center justify-between my-3">
          <section>
            <h3 className="font-bold text-2xl capitalize text-accent">
              My Collection
            </h3>
          </section>
          <section>
            <Button>Continue Shopping</Button>
          </section>
        </section>
        <main className="grid grid-cols-1 w-full lg:w-7/12 gap-4 mx-auto my-4">
          {/* Collections Section */}
          <section className="w-full my-3">
            {collections.map((product) => (
              <>
                <section
                  key={product.id}
                  className="product mb-4 rounded border border-accent"
                >
                  <section className="w-full flex items-center">
                    <section className="image mr-4 h-full">
                      <img
                        src={product.image}
                        alt={`${product.name} image`}
                        className="w-28 h-28 object-cover"
                      />
                    </section>
                    <section className="flex flex-col">
                      <Text className="font-bold">{product.name}</Text>
                      <Text className="text-sm underline" noCapitalize>
                        <a
                          href={product.merchant.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {product.merchant.name}
                        </a>
                      </Text>
                      <Text>
                        Price:{" "}
                        <span className="font-bold">#{product.price}</span>
                      </Text>
                    </section>
                  </section>
                </section>
                <section className="flex justify-end mt-2 transform -translate-x-5 -translate-y-10 gap-x-4">
                  <FaEye
                    className="cursor-pointer mr-2 text-accent h-4 w-4"
                    onClick={() => {
                      console.log(`View details for product ${product.id}`);
                    }}
                  />
                  <FaTrash
                    className="cursor-pointer text-red-500 h-4 w-4"
                    onClick={() => {
                      console.log(
                        `Remove product ${product.id} from collection`
                      );
                    }}
                  />
                </section>
              </>
            ))}
          </section>
        </main>
      </section>
    </SidebarLayout>
  );
};

export default Store;
