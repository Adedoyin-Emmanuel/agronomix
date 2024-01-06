"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";

import { useAppSelector } from "@/app/store/store";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useUpdateBuyerMutation } from "@/app/store/features/app/app.slice";
import Skeleton from "@/app/components/Skeleton/Skeleton";

export default function Profile() {
  const dispatch = useDispatch();
  const { userAuthInfo } = useAppSelector((state) => state.auth);
  const [updateBuyer, { isLoading }] = useUpdateBuyerMutation();

  const [formData, setFormData] = useState({
    name: userAuthInfo?.name,
    email: userAuthInfo?.email,
    username: userAuthInfo?.username,
    bio: userAuthInfo?.bio,
    location: userAuthInfo?.location,
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const dataToSubmit = {
        body: formData,
        id: 123,
      };
      const response: any = await updateBuyer(dataToSubmit).unwrap();

      //dispatch the saveDashboardInfo since the response is also the user object
      toast.success("");
      if (response?.data) {
        // dispatch(updateUserInfo(response.data));
        // dispatch(saveDashboardInfo(response.data));
      }
    } catch (error: any) {
      console.log(error.message);

      toast.error(error?.data?.message || error.error || error?.data);
    }
  };

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="appointments my-5">
            <h3 className="font-bold text-2xl capitalize text-accent">
              profile
            </h3>
            <Text className="text-sm">update your profile</Text>
            <section className="update-profile w-full my-8">
              <section className="image-section flex flex-col items-center justify-center">
                <div className="avatar cursor-pointer">
                  <div className="w-24 rounded-full">
                    {userAuthInfo?.profilePicture ? (
                      <img
                        className=""
                        src={userAuthInfo?.profilePicture}
                        alt="buyer profile image"
                      />
                    ) : (
                      <Skeleton className="w-24 h-24 rounded-full" />
                    )}
                  </div>
                  <section className="pen-container bg-accent flex items-center justify-center rounded-full w-8 h-8 transform-gpu text-white translate-y-16 -translate-x-10 hover:scale-110 duration-100 ease-linear hover:bg-secondary hover:text-slate-200">
                    <AiOutlineCamera className="h-6 w-6" />
                  </section>
                </div>

                <form
                  className="w-full p-1 md:w-1/2 xl:w-2/4"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <section className="my-4 mb-5">
                    <label htmlFor="name" className="text-md block my-2">
                      Fullname
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your fullname"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </section>

                  <section className="my-4 mb-5">
                    <label htmlFor="username" className="text-md block my-2">
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </section>

                  <section className="my-4 mb-5">
                    <label htmlFor="email" className="text-md block my-2">
                      Email
                    </label>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </section>
                  <section className="my-4 mb-5">
                    <label htmlFor="bio" className="text-md block my-2">
                      Bio
                    </label>
                    <textarea
                      className="textarea border-2 border-gray-300 focus:outline-none rounded-md w-full textarea-md"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                    ></textarea>
                  </section>

                  <section className="my-4 mb-5">
                    <label htmlFor="bio" className="text-md block my-2">
                      Location
                    </label>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </section>

                  <section className="my-4 mb-5 w-full">
                    <Button disabled={false}> Update info</Button>
                  </section>
                </form>
              </section>
            </section>
          </section>
        )}
      </SidebarLayout>
    </div>
  );
}
