"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Link from "next/link";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { FaUpload } from "react-icons/fa";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/app/store/features/app/app.slice";
import { Product } from "@/types/app.interface";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import chance from "chance";
import { uploadFly } from "@/app/helpers/uploadFly.config";
import Loader from "@/app/components/Loader";

const MerchantProductEdit = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("pId");
  const [product, setProduct] = useState<Product>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const chanceInstance = new chance();

  const [formData, setFormData] = useState({
    name: product?.name,
    description: product?.description,
    price: product?.price,
    quantity: product?.quantity,
    tags: product?.tags.join(", "),
    unpublish: product?.unpublish,
  });

  const productCategory = [
    { category: "Roots & Tubers" },
    { category: "Dairy Products" },
    { category: "Equipments" },
    { category: "Livestock Supplies" },
    { category: "Fruits & Vegetables" },
    { category: "Fertilizers" },
    { category: "Organic Products" },
    { category: "Pesticides" },
    { category: "Others" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(productCategory[0]);
  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value, type, checked } = e.target;

    // add a conditional to handle checkbox
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const {
    data: productData,
    isLoading: isProductLoading,
    isSuccess: productSuccess,
    refetch: productRefetch,
  } = useGetProductByIdQuery(productId);

  useEffect(() => {
    if (productData && productSuccess) {
      const refetchData = async () => {
        const response = await productRefetch();
        return response;
      };

      refetchData().then((data) => {});
      setProduct(productData?.data);

      // Map over productCategory to find the matching category
      const matchedCategory = productCategory.find(
        (item) => item.category === productData.data.category
      );

      // Update selectedCategory based on the matching category
      setSelectedCategory(matchedCategory || productCategory[0]);
      setFormData({
        name: productData?.data.name || "",
        description: productData?.data.description || "",
        price: productData?.data.price || 0,
        quantity: productData?.data.quantity || 0,
        tags: productData?.data.tags?.join(",") || "",
        unpublish: productData?.data.unpublish || false,
      });
    }
  }, [productData, isProductLoading]);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the file type is an image
      if (file.type.startsWith("image/")) {
        setSelectedImage(file);
      } else {
        toast.error("Please select a valid image file");
      }
    } else {
      toast.error("Please select an image");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { tags, ...rest } = formData;

    const tagsArray = tags!.split(",");

    const newFormData = {
      ...rest,
      tags: tagsArray,
    };

    /**
     * @summary the flyName is the name of the file to be uploaded to uploadfly
     */
    const flyName = chanceInstance.string({
      length: 20,
      casing: "lower",
      alpha: true,
      numeric: true,
    });

    try {
      setUploadingImage(true);
      const uploadFlyResponse = await uploadFly.upload(selectedImage as File, {
        filename: flyName,
      });

      if (uploadFlyResponse?.success) {
        const flyUrl = uploadFlyResponse?.data?.url;
        setUploadingImage(false);

        // This response is from my own API so no need to add agronomixResponse 😀
        const dataToSubmit = {
          ...newFormData,
          category: selectedCategory.category,
          image: flyUrl,
        };

        try {
          const response = await updateProduct(dataToSubmit).unwrap();

          if (response?.data) {
            toast.success(response?.message);
            console.log(response);
          }
        } catch (error: any) {
          toast.error(error?.data?.message || error.error || error?.data);
        }
      }

      console.log(uploadFlyResponse);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <MerchantSidebarLayout>
      {isProductLoading ? (
        <Loader />
      ) : (
        <section className="w-full">
          <section>
            <h3 className="font-bold text-2xl capitalize text-accent">
              Product Edit
            </h3>
            <Text className="text-sm">
              Editing{" "}
              <span className="text-accent font-bold">{product?.name!}</span>
            </Text>
          </section>
          <form className="w-full lg:w-10/12 mx-auto">
            <br />
            <section className="my-5">
              <label className="block my-1">Product Name:</label>
              <Input
                type="text"
                placeholder="Enter your product name"
                name="name"
                value={formData.name}
                required
                onChange={handleInputChange}
              />
            </section>

            <section className="my-5">
              <label className="block my-1">Product Description:</label>
              <textarea
                className="textarea border-[1px] border-gray-300 focus:outline-none rounded-md w-full textarea-md"
                value={formData.description}
                name="description"
                onChange={handleInputChange}
                required
                placeholder="Enter your product description"
              />
            </section>

            <section className="my-5">
              <label className="block my-1">Product Price:</label>
              <Input
                type="number"
                placeholder="Enter your product price"
                name="price"
                value={formData.price}
                required
                min={1}
                onChange={handleInputChange}
              />
            </section>

            <section className="my-5">
              <label className="block my-1">Product Quantity:</label>
              <Input
                type="number"
                placeholder="Enter your product quantity"
                name="quantity"
                value={formData.quantity}
                min={1}
                required
                onChange={handleInputChange}
              />
            </section>

            <section className="my-5">
              <label className="block my-1">Product Tags:</label>
              <Input
                type="text"
                placeholder="Enter your product tags, seperate by commmas"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
              />
            </section>

            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <div className="relative mt-1 z-[1000] my-4 mb-5">
                <label htmlFor="email" className="text-md block my-2">
                  Product Category
                </label>
                <Listbox.Button className="relative w-full rounded-md bg-white py-5  border-[1px] border-gray-300 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
                  <span className="block truncate">
                    {selectedCategory.category}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm cursor-pointer">
                    {productCategory.map((item, itemIndex) => (
                      <Listbox.Option
                        key={itemIndex}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-accent text-white" : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item.category}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <section className="my-5">
              <label className="block my-1">Product Images:</label>
              <section className="w-full flex items-center justify-center my-1 border border-accent rounded h-20 p-2">
                <section className="w-56 flex items-center">
                  <label className="capitalize w-full cursor-pointer text-accent flex items-center justify-center font-bold">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className=""
                      hidden
                      required
                    />
                    <FaUpload className="text-accent w-5 h-5 text-center" />
                    <span className="text-sm font-normal px-3 text-black">
                      {(selectedImage && selectedImage.name) ||
                        "Upload product image"}
                    </span>
                  </label>{" "}
                </section>
              </section>
            </section>

            <section className="my-5">
              <label className="block my-1">Product Status:</label>
              <section className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="unpublish"
                  checked={formData.unpublish}
                  onChange={handleInputChange}
                  className="checkbox text-accent"
                />

                <Text>
                  Unpublish{" "}
                  <span className="text-sm">
                    (This will only save the product and not publish it)
                  </span>
                </Text>
              </section>
            </section>

            <br />
            <section className="my-4 mb-5  mx-auto">
              <Button>Update product</Button>
            </section>
          </form>
        </section>
      )}
    </MerchantSidebarLayout>
  );
};

export default MerchantProductEdit;
