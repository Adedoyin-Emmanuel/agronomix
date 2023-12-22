import { AppDispatch, useAppSelector } from "@/app/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { GoBell } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";

interface AppHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showWelcomeMessage?: boolean;
}

const AppHeader = ({ className, showWelcomeMessage }: AppHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  // const [logout] = useLogoutMutation();
  // const { userInfo } = useAppSelector((state) => state.auth);
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
      text: "New message from Mango",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 2,
      text: "Reminder: Appointment at 3 PM",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 3,
      text: "Mayfair accepted your appointment",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
  ];

  const profileMenuItems = [
    {
      id: 1,
      text: "view appointments",
      onClick: () => {
        router.push("/user/appointments");
      },
    },

    {
      id: 2,
      text: "healthcare history",
      onClick: () => {
        router.push("/user/dashboard");
      },
    },
    {
      id: 3,
      text: "your hospitals",
      onClick: () => {
        router.push("/user/search");
      },
    },

    {
      id: 4,
      text: "view profile",
      onClick: () => {
        router.push("/user/profile/me");
      },
    },

    {
      id: 5,
      text: "settings",
      onClick: () => {
        router.push("/user/settings");
      },
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
          <h2 className="font-bold capitalize text-[18px] md:text-[20px]">
            hi, Emmysoft 👋
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
                  className="text-sm p-2 hover:bg-purple-100 rounded capitalize"
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
            <img
              className=""
              src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
              alt="user profile image"
            />
          </div>

          {isProfileDropdownVisible && (
            <div className="profile-dropdown absolute  top-full w-60 h-96 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">
                Profile Menu
              </h4>
              {profileMenuItems.map((item) => (
                <p
                  key={item.id}
                  className="text-[13px] md:text-sm p-3 hover:bg-purple-100 rounded capitalize mt-2 cursor-pointer"
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
  // const dispatch = useDispatch<AppDispatch>();
  // const [logout] = useLogoutMutation();
  // const { userInfo } = useAppSelector((state) => state.auth);
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
      text: "New message from Emmysoft",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 2,
      text: "Reminder: Appointment at 5 PM",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 3,
      text: "Emmysoft booked an appointment",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
  ];

  const profileMenuItems = [
    {
      id: 1,
      text: "view appointments",
      onClick: () => {
        router.push("/hospital/appointments");
      },
    },

    {
      id: 2,
      text: "healthcare history",
      onClick: () => {},
    },
    {
      id: 3,
      text: "your users",
      onClick: () => {
        router.push("/hospital/search");
      },
    },

    {
      id: 4,
      text: "view profile",
      onClick: () => {
        router.push("/hospital/profile/me");
      },
    },

    {
      id: 5,
      text: "settings",
      onClick: () => {
        router.push("/hospital/settings");
      },
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
          <h2 className="font-bold capitalize text-[18px] md:text-[20px]">
            hi, Emmysoft 👋
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
                  className="text-sm p-2 hover:bg-purple-100 rounded capitalize"
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
            <img
              className=""
              src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
              alt="hospital profile image"
            />
          </div>

          {isProfileDropdownVisible && (
            <div className="profile-dropdown absolute  top-full w-60 h-96 right-0 bg-white z-[100] rounded-md shadow-md p-4">
              <h4 className="mb-2 font-bold text-gray-800 capitalize">
                Profile Menu
              </h4>
              {profileMenuItems.map((item) => (
                <p
                  key={item.id}
                  className="text-[13px] md:text-sm p-3 hover:bg-purple-100 rounded capitalize mt-2 cursor-pointer"
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
