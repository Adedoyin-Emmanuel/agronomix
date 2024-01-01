import { AppDispatch, useAppSelector } from "@/app/store/store";
import { useLogoutMutation } from "@/app/store/features/app/app.slice";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { GoBell } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { BsCart } from "react-icons/bs";
import Skeleton from "../Skeleton/Skeleton";

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
      onClick: () => {},
    },

    {
      id: 2,
      text: "Store",
      onClick: () => {},
    },
    {
      id: 3,
      text: "View Profile",
      onClick: () => {},
    },

    {
      id: 4,
      text: "Settings",
      onClick: () => {},
    },

    {
      id: 5,
      text: "Transaction History ",
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
        //     dispatch(resetUser());
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
              <Skeleton className="rounded-md" width={44} height={8} />
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
          <BsCart
            className="h-6 w-6 transition-colors hover:text-accent cursor-pointer"
            onClick={toggleCartDropdown}
          />

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
              <Skeleton className="rounded-md" width={44} height={8} />
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
          <GoBell
            className="h-6 w-6 transition-colors hover:text-accent cursor-pointer"
            onClick={toggleNotificationDropdown}
          />

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
          <div className="w-8 rounded-full" onClick={toggleProfileDropdown}>
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
