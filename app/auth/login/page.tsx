"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import Text from "@/app/components/Text";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/app/store/features/app/app.slice";
import { loginUser } from "@/app/store/features/auth/auth.slice";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Signup = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | any>(null);
  const loginAs = [{ userType: "Buyer" }, { userType: "Merchant" }];
  const [selected, setSelected] = useState(loginAs[0]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const [login, { isLoading }] = useLoginMutation();

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userType, ...rest } = formData;

    const dataToSend = {
      ...rest,
      userType: selected.userType.toLowerCase(),
    };

    try {
      const response = await login(dataToSend).unwrap();
      if (response) {
        toast.success(response.message);
        const jwtToken = response.data.accessToken;
        const jwtPayload: any = jwt.decode(jwtToken);
        const tempData = jwtPayload;
        const { role } = tempData;
        const { accessToken, refreshToken: token, ...data } = response.data;
        const userData = { ...data, role };

        dispatch(loginUser(userData));

        //make request to our auth server
        try {
          const serverResponse = await axios.post("/api/auth/set-token", {
            token,
          });
        } catch (error: any) {
          toast.error("Token not set");
        }

        //route the user to their respective page
        if (role === "buyer") {
          router.push("/buyer/dashboard");
        } else if (role === "merchant") {
          router.push("/merchant/dashboard");
        } else {
          toast.error("Invalid token, please login!");
          router.push("/auth/login");
        }
      }
    } catch (error: any) {
      toast.error(error?.data?.message || error.error || error?.data);
    }
  };

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center">
        {isLoading && <Loader />}
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

          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 z-[1000] my-4 mb-5">
              <label htmlFor="loginAs" className="text-md block my-2">
                Login As
              </label>
              <Listbox.Button className="relative w-full rounded-md bg-white py-5  border-[1px] border-gray-300 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
                <span className="block truncate">{selected.userType}</span>
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
                  {loginAs.map((item, itemIndex) => (
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
                            {item.userType}
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
