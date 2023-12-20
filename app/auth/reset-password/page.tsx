"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import Text from "@/app/components/Text";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const searchParams = useSearchParams();

  const userType = searchParams.get("userType");
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    password: "",
    userType,
    token,
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //
    } catch (error: any) {
      toast.error(error?.data?.message || error.error || error?.data);
    }
  };
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form
        className="w-11/12 md:w-1/2 xl:w-1/4"
        onSubmit={(e) => {
          handlePasswordReset(e);
        }}
      >
        <section className="header-section my-8">
          <h3 className="text-3xl capitalize font-bold text-secondary">
            reset password
          </h3>
          <Text>elevate your agro shopping experience</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="password" className="text-md block my-2">
            New Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your new password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button>Reset password</Button>
        </section>
      </form>
    </section>
  );
};

export default ResetPassword;
