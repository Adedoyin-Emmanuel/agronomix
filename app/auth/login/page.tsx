"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import Text from "@/app/components/Text";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  useLoginMutation,
  saveDashboardInfo,
} from "@/app/store/features/app/app.slice";

const Signup = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | any>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    signupAs: "buyer",
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    toast.success("Login successful");
  };

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center">
        <form
          className="w-11/12 md:w-1/2 xl:w-1/4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          ref={formRef}
        >
          <section className="header-section my-8">
            <h3 className="text-3xl capitalize font-bold text-secondary">
              Welcome back
            </h3>
            <Text>elevate your agro shopping experience</Text>
          </section>
          {/* 
                  <Loader /> */}

          <section className="my-4 mb-5">
            <label htmlFor="email" className="text-md block my-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </section>

          <section className="my-4 mb-5">
            <label htmlFor="email" className="text-md block my-2">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </section>

          <section className="my-4 mb-5">
            <label htmlFor="email" className="text-md block my-2">
              Login As
            </label>
            <select
              className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
              name="loginAs"
              value={formData.signupAs}
              onChange={handleInputChange}
            >
              <option value="buyer">Buyer</option>
              <option value="merchant">Merchant</option>
            </select>
          </section>

          <section className="my-4 mb-5 w-full">
            <Button>Login</Button>
          </section>

          <section>
            <Text className="inline">
              no account?
              <Link
                className="capitalize text-secondary px-1"
                href={"/auth/signup"}
              >
                create account
              </Link>
              <Link
                className="capitalize text-secondary px-1"
                href={"/auth/forgot-password"}
              >
                Forgot Password
              </Link>
            </Text>
          </section>
        </form>
      </section>
    </>
  );
};

export default Signup;
