"use client";
import React, { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { IoFilter } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";

const Discover = () => {
  const pathname = usePathname();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [defaultIcon, setDefaultIcon] = useState(
    <IoFilter className="w-6 h-6 text-white" />
  );

  const filterContainerRef = useRef<HTMLDivElement | any>();

  const handleShowFilter = () => {
    const filterContainer = filterContainerRef.current;
    setShowFilter(!showFilter);

    if (showFilter) {
      if (filterContainer) {
        filterContainer.classList.remove("fade-out");
        filterContainer.classList.add("fade-in");

        //change the filter icon to cancel
        setDefaultIcon(<ImCancelCircle className="h-6 w-6 text-white" />);
      }
    } else {
      if (filterContainer) {
        filterContainer.classList.remove("fade-in");
        filterContainer.classList.add("fade-out");

        //change the filter icon to filter
        setDefaultIcon(<IoFilter className="w-6 h-6 text-white" />);
      }
    }
  };

  return (
    <SidebarLayout>
      <section className="w-full">
        <h3 className="font-bold text-2xl capitalize text-accent">
          discover products
        </h3>
        <Text className="text-sm ">Search, save and shop agro products</Text>
        <form className="flex items-center justify-center mt-5 flex-col w-full">
          <input
            type="text"
            placeholder="Discover products"
            name="productName"
            className="bg-[#F5F5F5] capitalize p-5 rounded-full w-11/12 outline-none border-2 border-accent transition-all duration-150 ease-in my-5 text-sm"
          />

          <section className="filters xl:flex hidden gap-x-3 mt-2">
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              all
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              fruits & vegetables
            </span>

            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Roots & tubers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Dairy Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Equipments
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Livestock supplies
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Fertilizers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Organic Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Pesticides{" "}
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Others
            </span>
          </section>

          <section className="xl:hidden w-11/12 flex items-end justify-end p-2">
            <section
              className="bg-accent p-2 rounded"
              onClick={handleShowFilter}
            >
              {defaultIcon}
            </section>
          </section>
          <section
            className="xl:hidden hidden w-11/12 filters flex-col rounded p-2 border border-accent gap-y-2 z-[1000]"
            ref={filterContainerRef}
          >
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              all
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              fruits & vegetables
            </span>

            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Roots & tubers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Dairy Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Equipments
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Livestock supplies
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Fertilizers
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Organic Products
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Pesticides{" "}
            </span>
            <span className="capitalize cursor-pointer p-2 border-[1px] rounded hover:bg-accent hover:border-transparent hover:text-white transition-all duration-150 ease-in">
              Others
            </span>
          </section>
        </form>
        <br />
        <br />
        <br />
        <section className="md:w-11/12 w-full md:p-0 p-1 mx-auto flex items-center justify-center mt-5 flex-col">
          <section className="recommended w-full">
            <h3 className="capitalize text-[20px] font-bold md:text-start text-center">
              recommended for you
            </h3>

            <section className="products flex flex-col items-center justify-center lg:grid sm:grid-cols-2 xl:grid-cols-4 w-full gap-10 my-5">
              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/corn.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Fresh corn</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @emmysoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.8 (28)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#2k</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/cassava.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Fresh cassava</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @amanda
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.8 (28)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#1k</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/roasted-corn.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Juicy Agbado</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @henqsoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.8 (28)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#100</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/fruit-1.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Fresh Fruits</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @emmysoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.4 (29)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#100</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <br />
          <br />
          <br />
          <section className="trending w-full">
            <h3 className="capitalize text-[20px] font-bold md:text-start text-center">
              Trending 🚀
            </h3>

            <section className="products flex flex-col items-center justify-center lg:grid sm:grid-cols-2 xl:grid-cols-4 w-full gap-10 my-5">
              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/tractor.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Farm Tractor</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @emmysoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.6 (68)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#4.3m</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/fruit-2.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Fruits & Vegetables</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @amanda
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.8 (28)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#500</h2>
                    <section className="bookmark">
                      <BiBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/plough.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Farm Plough</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @henqsoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.8 (28)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#5.7m</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>

              <section className="product grid grid-rows-2 md:w-52 w-11/12  h-80 border border-accent rounded">
                <section className="image">
                  <img
                    src={"/assets/roasted-corn.png"}
                    alt="product"
                    className="w-full h-full"
                  />
                </section>

                <section className="others p-1">
                  <section className="title my-2">
                    <p className="capitalize font-bold">Fresh Agbado</p>
                  </section>

                  <section className="merchant-name flex items-center gap-x-1 my-2">
                    <section className="icon">
                      <img
                        src="/assets/cassava.png"
                        alt="merchant profile image"
                        className="rounded-full h-6 w-6"
                      />
                    </section>
                    <section className="name underline text-sm cursor-pointer hover:text-primary transition-colors duration-150 ease-in">
                      @emmysoft
                    </section>
                  </section>
                  <section className="rating flex items-center gap-x-1 my-3">
                    <FaStar className="h-5 w-5 text-primary" />

                    <p className="font-bold text-sm">4.4 (29)</p>
                  </section>

                  <section className="breaker border-t-[1px] border-primary w-full my-2"></section>

                  <section className="price flex items-center justify-between p-1">
                    <h2 className="font-bold text-[18px]">#50</h2>
                    <section className="bookmark">
                      <BiSolidBookmark className="w-5 h-5 cursor-pointer text-primary" />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </SidebarLayout>
  );
};

export default Discover;
