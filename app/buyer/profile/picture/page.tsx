"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import { useAppSelector } from "@/app/store/store";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useUpdateBuyerMutation } from "@/app/store/features/app/app.slice";
import Skeleton from "@/app/components/Skeleton/Skeleton";
import Modal from "@/app/components/Modal";

export default function Profile() {
  const dispatch = useDispatch();
  const { userAuthInfo } = useAppSelector((state) => state.auth);
  const [updateBuyer, { isLoading }] = useUpdateBuyerMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement | any>(null);

  const showModal = () => {
    if (modalRef && modalRef.current) {
      modalRef?.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef && modalRef.current) {
      modalRef?.current.closeModal();
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file) {
      setIsDialogOpen(true);
      setSelectedImage(file);
      setImageUrl(file ? URL.createObjectURL(file) : null);
      console.log(URL.createObjectURL(file));
      showModal();
    } else {
      toast.error("Please select an image");
    }
  };

  const handleContinue = () => {
    console.log("Uploading image:", selectedImage);
    setIsDialogOpen(false);
    closeModal();
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="appointments my-5">
            <h3 className="font-bold text-2xl capitalize text-accent">
              Profile Picture
            </h3>
            <Text className="text-sm">Update your profile picture</Text>
            <section className="update-profile w-full my-8">
              <div className="image-section flex flex-col items-center justify-center">
                <div className="avatar cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    {userAuthInfo?.profilePicture ? (
                      <img
                        className="w-full h-full object-cover"
                        src={userAuthInfo?.profilePicture}
                        alt="Buyer profile image"
                      />
                    ) : (
                      <Skeleton className="w-full h-full rounded-full" />
                    )}
                  </div>
                </div>

                <Modal ref={modalRef}>
                  <section className="">
                    <section
                      className="w-full flex items-center justify-center"
                      my-2
                    >
                      <img src={imageUrl!} className="w-60 h-60 rounded-full" />
                    </section>
                    <section className="mt-8 w-full flex items-end justify-end">
                      <Button>Proceed</Button>
                    </section>
                  </section>
                </Modal>

                <form className="w-60" onChange={handleImageChange}>
                  <label className="capitalize w-full my-5 text-white flex items-center justify-center hover:bg-accent cursor-pointer rounded p-3 bg-primary transition-all transform">
                    <input
                      type="file"
                      id="productImage"
                      name="produtImages"
                      className=""
                      hidden
                      multiple
                    />
                    upload
                  </label>{" "}
                </form>
              </div>
            </section>
          </section>
        )}
      </SidebarLayout>
    </div>
  );
}
