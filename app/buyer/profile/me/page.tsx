"use client";

import Loader from "@/app/components/Loader";
import SidebarLayout from "@/app/components/SidebarLayout";
import Text from "@/app/components/Text";
import Verified from "@/app/components/Verified";

import { useAppSelector } from "@/app/store/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import moment from "moment";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import Skeleton from "@/app/components/Skeleton/Skeleton";

export default function Me() {
  const dispatch = useDispatch();

  const { userAuthInfo } = useAppSelector((state) => state.auth);

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <section className=" my-5">
          <section className="w-full">
            <section className="w-full my-5">
              <section className="w-full flex flex-col items-center">
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
                </div>

                <section className="profile w-full p-1 md:p-0 md:w-1/2 xl:w-2/6">
                  <section className="w-full flex items-center justify-between mt-2 flex-wrap">
                    <h3 className="font-bold text-[20px] capitalize flex items-center gap-x-1">
                      {userAuthInfo?.name ? (
                        userAuthInfo?.name
                      ) : (
                        <Skeleton className="w-40 h-5 rounded" />
                      )}
                      <span>
                        {" "}
                        {userAuthInfo?.isVerified && <Verified big={true} />}
                      </span>
                    </h3>

                    <Link href={"/buyer/profile"}>
                      <section className="bg-accent rounded-[20px] text-sm py-1 px-3 text-white text-center capitalize cursor-pointer hover:bg-secondary transition-colors duration-100 ease-in my-2">
                        update
                      </section>
                    </Link>
                  </section>

                  <Text noCapitalize className="text-sm">
                    {userAuthInfo?.username ? (
                      "@" + userAuthInfo?.username
                    ) : (
                      <Skeleton className="w-24 h-5 rounded" />
                    )}
                  </Text>

                  <Text className="text-sm mt-1">
                    {" "}
                    {userAuthInfo?.bio ? (
                      userAuthInfo?.bio
                    ) : (
                      <Skeleton className="w-72 h-4 rounded" />
                    )}
                  </Text>

                  <section className="other-details w-full flex flex-col items-start my-5">
                    <section className="location flex items-center justify-center gap-x-2 my-1">
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
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>

                      <Text className="text-sm">
                        {userAuthInfo?.location ? (
                          userAuthInfo?.location || "Lagos Nigeria"
                        ) : (
                          <Skeleton className="w-32 h-5 rounded" />
                        )}
                      </Text>
                    </section>

                    <section className="location flex items-center justify-center gap-x-2 my-1">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>

                      <Text className="text-sm">
                        {" "}
                        {userAuthInfo?.location ? (
                          userAuthInfo?.location || "Lagos Nigeria"
                        ) : (
                          <Skeleton className="w-32 h-5 rounded" />
                        )}
                      </Text>
                    </section>

                    <section className="location flex items-center justify-center gap-x-2 my-1">
                      <SlBadge className="w-6 h-6" />
                      <Text className="text-sm">
                        {" "}
                        {userAuthInfo?.location ? (
                          userAuthInfo?.location || "Lagos Nigeria"
                        ) : (
                          <Skeleton className="w-32 h-5 rounded" />
                        )}
                      </Text>
                    </section>

                    <section className="date-joined flex items-center justify-center gap-x-2 my-1">
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
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>

                      <Text className="text-sm">
                        {userAuthInfo?.location ? (
                          userAuthInfo?.location || "Lagos Nigeria"
                        ) : (
                          <Skeleton className="w-32 h-5 rounded" />
                        )}
                      </Text>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </SidebarLayout>
    </div>
  );
}
