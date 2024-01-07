"use client";

import Modal from "@/app/components/Modal";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Verified from "@/app/components/Verified";

import { useAppSelector } from "@/app/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsPenFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Loader from "@/app/components/Loader";
import { useLogoutMutation } from "@/app/store/features/app/app.slice";
import { resetApp } from "@/app/store/features/app/app.slice";
import { logoutUser } from "@/app/store/features/auth/auth.slice";
import { useVerfiyEmailQuery } from "@/app/store/features/app/app.slice";
import Skeleton from "@/app/components/Skeleton/Skeleton";

const Settings = () => {
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const [skip, setSkip] = useState<boolean>(true);
  const { userAuthInfo } = useAppSelector((state) => state.auth);

  const email = userAuthInfo?.email;
  const { data, isError, isLoading } = useVerfiyEmailQuery(email, { skip });
  const verificationRef = useRef<HTMLDialogElement | any>(null);

  const handleLogoutClick = async () => {
    const response: any = await logout({});
    if (response) {
      toast.success(response.data.message);
      dispatch(resetApp({}));
      dispatch(logoutUser({}));
      router.push("/auth/login");
    }
  };

  const handleNavigateToProfile = () => {
    router.push("/buyer/profile/me");
  };

  const handleUpdateProfile = () => {
    router.push("/buyer/profile");
  };

  const handleVerificationModalClick = () => {
    if (verificationRef && verificationRef.current) {
      verificationRef?.current.showModal();
    }
  };

  const handleSendVerficationMail = async () => {
    setSkip(false);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.message) {
        toast.success(data.message);
        verificationRef?.current.closeModal();
      } else {
        toast.error("An error occured");
      }
    } else if (isError) {
      console.log(data);
      toast.error("An error occured");
    }
  }, [data, skip]);

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="my-5">
            <h3 className="font-bold text-2xl capitalize text-accent">
              Settings
            </h3>
            <Text className="text-sm">change your settings</Text>
            <section className="settings-section my-8">
              <section
                className="profile-container w-full flex items-center justify-center cursor-pointer"
                onClick={handleNavigateToProfile}
              >
                <section className="profile-section w-full md:p-2 my-5 flex items-center md:justify-center flex-col gap-y-7 gap-x-5 md:gap-x-20">
                  <div className="avatar cursor-pointer">
                    <div className="w-20 rounded-full">
                      {userAuthInfo?.profilePicture ? (
                        <img
                          className=""
                          src={userAuthInfo?.profilePicture}
                          alt="buyer profile image"
                        />
                      ) : (
                        <Skeleton className="w-20 h-20 rounded-full" />
                      )}
                    </div>
                    <section className="pen-container bg-accent flex items-center justify-center rounded-full w-6 h-6 transform-gpu text-white translate-y-16 -translate-x-7 hover:scale-110 duration-100 ease-linear hover:bg-secondary hover:text-slate-200">
                      <Link href={"/buyer/profile"}>
                        {" "}
                        <BsPenFill />
                      </Link>
                    </section>
                  </div>
                  <section className="user-info w-full flex items-start flex-col md:items-center p-1">
                    <h1 className="font-bold capitalize flex items-center gap-x-1">
                      {userAuthInfo?.name ? (
                        userAuthInfo?.name
                      ) : (
                        <Skeleton className="w-32 h-5 rounded" />
                      )}
                      <span>{userAuthInfo?.isVerified && <Verified />}</span>
                    </h1>
                    <section className="block">
                      <Text
                        className="block text-start text-sm my-1"
                        noCapitalize={true}
                      >
                        {userAuthInfo?.username ? (
                          "@" + userAuthInfo?.username
                        ) : (
                          <Skeleton className="w-24 h-5 rounded" />
                        )}
                      </Text>
                      <Text className="block text-start text-sm py-1">
                        {userAuthInfo?.bio ? (
                          userAuthInfo?.bio
                        ) : (
                          <Skeleton className="w-72 h-4 rounded" />
                        )}
                      </Text>
                    </section>
                  </section>
                </section>
              </section>
              <Modal ref={verificationRef}>
                <section className="confirm">
                  <h3 className="font-bold text-2xl capitalize text-accent">
                    get verified
                  </h3>
                  <p className="my-3">
                    A verification mail would be sent to your inbox, do well to
                    check spam if you can't find the mail. Then follow the mail
                    instructions.
                  </p>

                  <section className="mt-8 w-full flex items-end justify-end">
                    <button
                      className="bg-accent capitalize p-2 rounded-md text-white text-sm"
                      onClick={handleSendVerficationMail}
                    >
                      send mail
                    </button>
                  </section>
                </section>
              </Modal>
              <section className="action-container w-full flex flex-col items-center md:justify-center">
                <section
                  className="account-details my-2 flex items-center border-transparent border-[1px] hover:border-accent transition-colors duration-100 ease-in rounded cursor-pointer gap-x-10 w-full p-4 md:w-6/12"
                  onClick={handleUpdateProfile}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>

                  <Link href="/buyer/profile" className="details">
                    <h3 className="account font-bold capitalize text-[16px]">
                      account{" "}
                    </h3>
                    <Text className="text-sm">update your account info</Text>
                  </Link>
                </section>
                <section
                  className="account-details my-2 flex items-center border-transparent border-[1px] hover:border-accent transition-colors duration-100 ease-in rounded cursor-pointer gap-x-10 w-full p-4 md:w-6/12"
                  onClick={handleNavigateToProfile}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <section className="details">
                    <Link href={"/buyer/profile/me"}>
                      <h3 className="account font-bold capitalize text-[16px]">
                        profile{" "}
                      </h3>
                      <Text className="text-sm">view your profile</Text>
                    </Link>
                  </section>
                </section>
                <section
                  className="account-verify my-2 flex items-center border-transparent border-[1px] hover:border-accent transition-colors duration-100 ease-in rounded cursor-pointer gap-x-10 w-full p-4 md:w-6/12"
                  onClick={handleVerificationModalClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <section className="details">
                    <h3 className="account font-bold capitalize text-[16px]">
                      verify account{" "}
                    </h3>
                    <Text className="text-sm">get your account verified</Text>
                  </section>
                </section>
                <section className="account-details my-2 flex items-center border-transparent border-[1px] hover:border-accent transition-colors duration-100 ease-in rounded cursor-pointer gap-x-10 w-full p-4 md:w-6/12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>

                  <section className="details">
                    <h3 className="account font-bold capitalize text-[16px]">
                      Invite{" "}
                    </h3>
                    <Text className="text-sm">
                      invite your friends to Agronomix
                    </Text>
                  </section>
                </section>
                <section
                  className="account-details my-2 flex items-center border-transparent border-[1px] hover:border-accent transition-colors duration-100 ease-in rounded cursor-pointer gap-x-10 w-full p-4 md:w-6/12"
                  onClick={handleLogoutClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>

                  <section className="details">
                    <h3 className="account font-bold capitalize text-[16px]">
                      Logout{" "}
                    </h3>
                    <Text className="text-sm">log out of your account</Text>
                  </section>
                </section>
              </section>
            </section>
          </section>
        )}
      </SidebarLayout>
    </div>
  );
};

export default Settings;
