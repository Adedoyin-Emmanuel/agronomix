"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { FaPen } from "react-icons/fa";

const Checkout = () => {
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Chicken",
      image: "/assets/chicken.jpg",
      merchant: {
        name: "@emmysoft",
        profileLink: "https://example.com/emmysoft",
      },
      price: 25,
      quantity: 1,
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
      quantity: 2,
    },
  ]);

  const handlePenClick = (product: any) => {
    setSelectedProduct(product);
    setQuantity(product.quantity);
    setShowSidebar(true);
  };

  const handleSidebarClose = () => {
    setShowSidebar(false);
  };

  const handleQuantityChange = (newQuantity: any) => {
    setQuantity(newQuantity);
  };

  const handleUpdateQuantity = () => {
    // Update the quantity for the selected product in the products array
    const updatedProducts = products.map((product) => {
      if (product.id === selectedProduct.id) {
        return {
          ...product,
          quantity: quantity == 0 ? 1 : quantity,
        };
      }
      return product;
    });

    // Set the updated products array
    setProducts(updatedProducts);

    // Close the sidebar
    setShowSidebar(false);
  };

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
        <main className="grid grid-cols-1 w-full lg:w-7/12 gap-4 mx-auto my-4">
          {/* Products Section */}
          <section className="w-full my-3">
            {products.map((product) => (
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
                      <Text>
                        Quantity:{" "}
                        <span className="font-bold">{product.quantity}</span>
                      </Text>
                    </section>
                  </section>
                </section>
                <section className="w-full flex justify-end transform -translate-y-12 -translate-x-4">
                  <FaPen
                    className="cursor-pointer"
                    onClick={() => handlePenClick(product)}
                  />
                </section>
              </>
            ))}
            <section className="w-full flex items-center justify-between border border-accent py-4 px-1">
              <h3 className="capitalize font-bold text-[20px]">total</h3>
              <Text className="font-bold">#500</Text>
            </section>
            <br />
            <Button>Pay</Button>
          </section>
        </main>
      </section>

      {/* Sidebar for Quantity Adjustment */}
      {showSidebar && selectedProduct && (
        <section className="fixed top-0 right-0 h-full w-full bg-gray-800 bg-opacity-50 flex items-center justify-center p-2">
          <section className="bg-white p-4 rounded">
            <h3 className="font-bold mb-4">Adjust Quantity</h3>
            <Input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => handleQuantityChange(e.target.value)}
            />
            <Button className="mt-4" onClick={handleUpdateQuantity}>
              Update Quantity
            </Button>
            <Button
              className="mt-3 bg-red-400 hover:bg-red-500 transition duration-200 ease-linear"
              onClick={handleSidebarClose}
            >
              Close
            </Button>
          </section>
        </section>
      )}
    </SidebarLayout>
  );
};

export default Checkout;
