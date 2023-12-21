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
  useCreateBuyerMutation,
  useCreateMerchantMutation,
} from "@/app/store/features/app/app.slice";
import Confetti from "react-confetti";

const Signup = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | any>(null);
  const [createBuyer, { isLoading: isCreateBuyerLoading }] =
    useCreateBuyerMutation();
  const [createMerchant, { isLoading: isCreateMerchantLoading }] =
    useCreateMerchantMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    signupAs: "buyer",
  });

  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { signupAs, ...rest } = formData;

    if (signupAs === "buyer") {
      try {
        const response = await createBuyer(rest).unwrap();
        if (response) {
          setShowConfetti(true);
          toast.success(response.message);
          router.push("/auth/login");
        }
      } catch (error: any) {
        toast.error(error?.data?.message || error.error || error?.data);
      }
    } else if (signupAs === "buyer") {
      try {
        const { name, signupAs, ...rest } = formData;
        const newData = {
          companyName: name,
          ...rest,
        };
        const response = await createMerchant(newData).unwrap();
        if (response) {
          setShowConfetti(true);
          toast.success(response.message);
          router.push("/auth/login");
        }
      } catch (error: any) {
        toast.error(error?.data?.message || error.error || error?.data);
      }
    } else {
      toast.error("Not a valid user type!");
    }
  };

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center">
        {isCreateBuyerLoading || (isCreateMerchantLoading && <Loader />)}
        {showConfetti && (
          <Confetti height={window?.innerHeight!} width={window?.innerWidth!} />
        )}
        <form
          className="w-11/12 md:w-1/2 xl:w-1/4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          ref={formRef}
        >
          <section className="header-section my-8">
            <h3 className="text-3xl capitalize font-bold text-secondary">
              Create An Account
            </h3>
            <Text>elevate your agro shopping experience</Text>
          </section>

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
            <label htmlFor="username" className="text-md block my-2">
              Username
            </label>
            <Input
              type="text"
              name="username"
              placeholder="Enter a unique username"
              value={formData.username}
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
              Signup As
            </label>
            <select
              className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
              name="signupAs"
              value={formData.signupAs}
              onChange={handleInputChange}
            >
              <option value="buyer">Buyer</option>
              <option value="merchant">Merchant</option>
            </select>
          </section>

          <section className="my-4 mb-5 w-full">
            <Button disabled={isCreateBuyerLoading || isCreateMerchantLoading}>
              Sign up
            </Button>
          </section>

          <section>
            <Text className="inline">
              have an account?
              <Link
                className="capitalize text-secondary px-1"
                href={"/auth/login"}
              >
                login
              </Link>
            </Text>
          </section>
        </form>
      </section>
    </>
  );
};

export default Signup;
