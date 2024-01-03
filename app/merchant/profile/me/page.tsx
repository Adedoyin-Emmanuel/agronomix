"use client";

import Loader from "@/app/components/Loader";
import { MerchantSidebarLayout } from "@/app/components/SidebarLayout";
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

export default function Me() {
  //const { userDashboardInfo } = useAppSelector((state) => state.user);

  // const dateCreated: any = userDashboardInfo && userDashboardInfo?.createdAt;

  return (
    <div className="w-screen h-screen">
      {false ? (
        <Loader />
      ) : false ? (
        <Text>An error occured</Text>
      ) : (
        <MerchantSidebarLayout>
          <section className=" my-5">
            <section className="w-full">
              <section className="w-full my-5">
                <section className="w-full flex flex-col items-center">
                  <div className="avatar cursor-pointer">
                    <div className="w-24 rounded-full">
                      <img
                        className=""
                        src={"/assets/corn.png"}
                        alt="hospital profile image"
                      />
                    </div>
                  </div>

                  <section className="profile w-full p-1 md:p-0 md:w-1/2 xl:w-2/6">
                    <section className="w-full flex items-center justify-between mt-5 flex-wrap">
                      <h3 className="font-bold text-[20px] capitalize flex items-center gap-x-1">
                        Adedoyin Emmanuel Adeniyi
                        <span> {true && <Verified big={true} />}</span>
                      </h3>

                      <Link href={"/buyer/profile"}>
                        <section className="bg-accent rounded-[20px] text-sm py-1 px-3 text-white text-center capitalize cursor-pointer hover:bg-secondary transition-colors duration-100 ease-in my-2">
                          update
                        </section>
                      </Link>
                    </section>

                    <Text noCapitalize className="text-sm">
                      @emmysoft
                    </Text>

                    <Text className="text-sm mt-2">I built stuff</Text>

                    <section className="other-details w-full flex flex-col items-start my-5">
                      <section className="location flex items-center justify-center gap-x-2 my-1">
                        <GrLocation className="w-5 h-5" />
                        <Text className="text-sm">{false || "Lagos 9ja"}</Text>
                      </section>

                      <section className="location flex items-center justify-center gap-x-2 my-1">
                        <HiOutlineShieldCheck className="w-5 h-5" />
                        <Text className="text-sm">28 total checkups</Text>
                      </section>

                      <section className="location flex items-center justify-center gap-x-2 my-1">
                        <SlBadge className="w-5 h-5" />
                        <Text className="text-sm">28 reviews</Text>
                      </section>

                      <section className="date-joined flex items-center justify-center gap-x-2 my-1">
                        <MdDateRange className="w-5 h-5" />
                        <Text className="text-sm">
                          joined {moment(new Date()).startOf("days").fromNow()}{" "}
                        </Text>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </MerchantSidebarLayout>
      )}
    </div>
  );
}
