import { AppDispatch, useAppSelector } from "@/app/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { logoutUser } from "@/app/store/features/auth/auth.slice";
import { useLogoutMutation } from "@/app/store/features/app/app.slice";
import { resetApp } from "@/app/store/features/app/app.slice";

interface AppHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showWelcomeMessage?: boolean;
}

const AppHeader = ({ className, showWelcomeMessage }: AppHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [logout] = useLogoutMutation();
  const { userAuthInfo } = useAppSelector((state) => state.auth);

  const router = useRouter();

  const [isCartDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const cartRef: any = useRef(null);
  const profileRef: any = useRef(null);

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (
        isCartDropdownVisible &&
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setIsNotificationDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isCartDropdownVisible]);

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (
        isProfileDropdownVisible &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isProfileDropdownVisible]);

  const toggleCartDropdown = () => {
    setIsNotificationDropdownVisible(!isCartDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const cartItems = [
    {
      id: 1,
      text: "2 Live Chicken",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 2,
      text: "28 Bag Of Rice",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 3,
      text: "32 Carton Of Meat",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },

    {
      id: 4,
      text: "48 Carton Of Noddles",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
  ];

  const profileMenuItems = [
    {
      id: 1,
      text: "Discover",
      onClick: () => {
        router.push("/buyer/discover");
      },
    },

    {
      id: 2,
      text: "Store",
      onClick: () => {
        router.push("/buyer/store");
      },
    },
    {
      id: 3,
      text: "View Profile",
      onClick: () => {
        router.push("/buyer/profile/me");
      },
    },

    {
      id: 4,
      text: "Settings",
      onClick: () => {
        router.push("/buyer/settings");
      },
    },

    {
      id: 5,
      text: "Transaction History ",
      onClick: () => {
        toast.success("We will implement that later");
      },
    },

    {
      id: 6,
      text: "Logout",
      onClick: async () => {
        try {
          const response = await logout({}).unwrap();
          if (response) {
            if (response) {
              toast.success(response.message);
              dispatch(logoutUser({}));
              dispatch(resetApp({}));
              router.push("/auth/login");
            }
          }
        } catch (error: any) {
          toast.error(error?.data?.message || error.error || error?.data);
        }
      },
    },
  ];

  const routeBack = () => {
    router.back();
  };

  return (
    <div
      className={`${className} flex items-center ${
        showWelcomeMessage ? "justify-between" : "justify-end"
      } p-2 md:p-0`}
    >
      {showWelcomeMessage ? (
        <section className="user-name">
          <h2
            className={`font-bold capitalize text-[18px] md:text-[20px] flex items-center gap-x-2`}
          >
            hi,{" "}
            {!userAuthInfo ? (
              <Skeleton className="rounded-md w-44 h-8" />
            ) : (
              <span className="capitalize">
                {userAuthInfo?.username + " 👋"}
              </span>
            )}{" "}
          </h2>
        </section>
      ) : (
        <section
          onClick={routeBack}
          className="block w-full cursor-pointer hover:text-accent duration-100 transition-colors ease-in"
        >
          <IoIosArrowBack className="block cursor-pointer w-6 h-6" />
        </section>
      )}

      <section className="user-profile flex items-center gap-x-4">
        <section className="notification cursor-pointer relative" ref={cartRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={toggleCartDropdown}
            className="h-6 w-6 transition-colors hover:text-accent cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {isCartDropdownVisible && (
            <div className="notification-dropdown absolute  top-full w-72 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">Cart</h4>
              {cartItems.map((item) => (
                <p
                  key={item.id}
                  className="text-sm p-2 hover:bg-accent hover:text-white rounded capitalize"
                  onClick={() => item.onClick()}
                >
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </section>

        <div className="avatar cursor-pointer relative" ref={profileRef}>
          <div className={`w-10 rounded-full`} onClick={toggleProfileDropdown}>
            {userAuthInfo ? (
              <img
                src={userAuthInfo?.profilePicture}
                alt="user profile image"
              />
            ) : (
              <Skeleton rounded width={10} height={10} />
            )}
          </div>

          {isProfileDropdownVisible && (
            <div className="profile-dropdown absolute  top-full w-60 h-96 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">
                Profile Menu
              </h4>
              {profileMenuItems.map((item) => (
                <p
                  key={item.id}
                  className="text-[13px] md:text-sm p-3 hover:bg-accent hover:text-white rounded capitalize mt-2 cursor-pointer"
                  onClick={() => item.onClick()}
                >
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export const MerchantAppHeader = ({
  className,
  showWelcomeMessage,
}: AppHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [logout] = useLogoutMutation();
  const { userAuthInfo } = useAppSelector((state) => state.auth);

  const router = useRouter();

  const [isNotificationDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const notificationRef: any = useRef(null);
  const profileRef: any = useRef(null);

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (
        isNotificationDropdownVisible &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isNotificationDropdownVisible]);

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (
        isProfileDropdownVisible &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isProfileDropdownVisible]);

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownVisible(!isNotificationDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const notificationItems = [
    {
      id: 1,
      text: "Funds came in",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 2,
      text: "You added a new product",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 3,
      text: "Merchant account created",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
  ];

  const profileMenuItems = [
    {
      id: 1,
      text: "My Products",
      onClick: () => {},
    },

    {
      id: 2,
      text: "Transaction History",
      onClick: () => {},
    },
    {
      id: 3,
      text: "Sales History",
      onClick: () => {},
    },

    {
      id: 4,
      text: "view profile",
      onClick: () => {},
    },

    {
      id: 5,
      text: "settings",
      onClick: () => {},
    },

    {
      id: 6,
      text: "Logout",
      onClick: async () => {
        // try {
        //   const response = await logout({}).unwrap();
        //   if (response) {
        //     toast.success(response.message);
        //     dispatch(logoutUser());
        //     router.push("/auth/login");
        //   }
        // } catch (error: any) {
        //   toast.error(error?.data?.message || error.error || error?.data);
        // }
      },
    },
  ];

  const routeBack = () => {
    router.back();
  };

  return (
    <div
      className={`${className} flex items-center ${
        showWelcomeMessage ? "justify-between" : "justify-end"
      } p-2 md:p-0`}
    >
      {showWelcomeMessage ? (
        <section className="user-name">
          <h2
            className={`font-bold capitalize text-[18px] md:text-[20px] flex items-center gap-x-2`}
          >
            hi,{" "}
            {!userAuthInfo ? (
              <Skeleton className="rounded-md w-44 h-8" />
            ) : (
              <span className="capitalize">
                {userAuthInfo?.username + " 👋"}
              </span>
            )}{" "}
          </h2>
        </section>
      ) : (
        <section
          onClick={routeBack}
          className="block w-full cursor-pointer hover:text-accent duration-100 transition-colors ease-in"
        >
          <IoIosArrowBack className="block cursor-pointer w-6 h-6" />
        </section>
      )}

      <section className="user-profile flex items-center gap-x-4">
        <section
          className="notification cursor-pointer relative"
          ref={notificationRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={toggleNotificationDropdown}
            className="h-6 w-6 transition-colors hover:text-accent cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          {isNotificationDropdownVisible && (
            <div className="notification-dropdown absolute  top-full w-72 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">
                Notifications
              </h4>
              {notificationItems.map((item) => (
                <p
                  key={item.id}
                  className="text-sm p-2 hover:bg-accent hover:text-white rounded capitalize"
                  onClick={() => item.onClick()}
                >
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </section>
        <div className="avatar cursor-pointer relative" ref={profileRef}>
          <div className="w-10 rounded-full" onClick={toggleProfileDropdown}>
            {userAuthInfo ? (
              <img
                src={userAuthInfo?.profilePicture}
                alt="merchant profile image"
              />
            ) : (
              <Skeleton rounded width={10} height={10} />
            )}
          </div>

          {isProfileDropdownVisible && (
            <div className="profile-dropdown absolute  top-full w-60 h-96 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">
                Profile Menu
              </h4>
              {profileMenuItems.map((item) => (
                <p
                  key={item.id}
                  className="text-[13px] md:text-sm p-3 hover:bg-accent hover:text-white rounded capitalize mt-2 cursor-pointer"
                  onClick={() => item.onClick()}
                >
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AppHeader;
