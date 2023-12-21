"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";

const Navbar: React.FC = (): JSX.Element => {
  const mobileLinksRef = useRef<HTMLElement>(null);
  const [navToggled, setNavToggled] = useState<boolean>(false);

  useEffect(() => {
    if (navToggled) {
      mobileLinksRef.current!.style.maxHeight = `${
        mobileLinksRef.current!.scrollHeight
      }px`;
    } else {
      mobileLinksRef.current!.style.maxHeight = "0";
    }
  }, [navToggled]);

  const handleHamburgerClick = () => {
    setNavToggled(!navToggled);
  };

  const navItemsClassname = "h-5 w-5  transition-color hover:text-secondary";
  const navItems = [
    {
      link: "https://github.com/adedoyin-emmanuel/caresync",
      element: <FiGithub className={navItemsClassname} />,
    },

    {
      link: "https://youtube.com/adedoyin-emmanuel-adeniyi/",
      element: <FiYoutube className={navItemsClassname} />,
    },
    {
      link: "https://x.com/Emmysoft_Tm/",
      element: <FiTwitter className={navItemsClassname} />,
    },
  ];
  return (
    <nav className="w-screen flex items-center md:justify-center justify-between md:flex-row flex-col  py-5 overflow-x-hidden z-10">
      <h2 className="font-extrabold text-3xl text-secondary  mx-5 md:flex items-center  hidden cursor-pointer ">
        <Link href="/">Agronomix</Link>
      </h2>

      <section className="hidden md:flex items-end justify-end w-4/6 overflow-x-hidden space-x-6">
        {navItems.map((navItem, index) => {
          return (
            <Link href={navItem.link} key={index}>
              {navItem.element}
            </Link>
          );
        })}
      </section>

      <section className="md:hidden flex w-full flex-col">
        <section className="header flex w-full items-center justify-between">
          <h2 className="font-extrabold text-secondary text-2xl  mx-5">
            <Link href="/">Agronomix</Link>
          </h2>

          <section
            className={`hamburger mx-5 transform transition-transform duration-300 ease-in-out  ${
              navToggled ? "-rotate-90 text-secondary" : "rotate-0"
            }`}
            onClick={handleHamburgerClick}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              stroke="currentColor"
              fill="currentColor"
              height="25"
              viewBox="0 0 225.000000 225.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                stroke="currentColor"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M135 2235 c-51 -18 -110 -81 -124 -131 -14 -52 -15 -685 0 -737 13
-49 63 -105 114 -128 36 -17 73 -19 391 -19 l352 0 53 28 c43 22 59 38 81 81
l28 53 0 352 c0 318 -2 355 -19 391 -23 51 -79 101 -128 114 -61 17 -698 14
-748 -4z m713 -496 c2 -260 0 -318 -12 -328 -9 -8 -102 -11 -327 -9 l-314 3
-3 328 -2 327 327 -2 328 -3 3 -316z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1356 2235 c-49 -17 -93 -59 -117 -110 -17 -37 -19 -71 -19 -391 l0
-352 28 -53 c22 -43 38 -59 81 -81 l53 -28 352 0 c318 0 355 2 391 19 51 23
101 79 114 128 15 53 14 685 0 738 -15 52 -82 119 -134 134 -62 17 -699 14
-749 -4z m702 -502 l-3 -328 -314 -3 c-223 -2 -318 1 -327 9 -11 9 -14 72 -14
324 0 171 3 315 7 318 3 4 152 7 330 7 l323 0 -2 -327z"
                ></path>
                <path
                  fill="currentColor"
                  d="M125 1011 c-51 -23 -101 -79 -114 -128 -15 -53 -14 -685 0 -738 15
-52 82 -119 134 -134 53 -14 685 -15 738 0 49 13 105 63 128 114 17 36 19 73
19 391 l0 352 -28 53 c-22 43 -38 59 -81 81 l-53 28 -352 0 c-318 0 -355 -2
-391 -19z m714 -175 c8 -9 11 -104 9 -327 l-3 -314 -327 -3 -328 -2 0 323 c0
178 3 327 7 330 3 4 147 7 318 7 252 0 315 -3 324 -14z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1329 1002 c-43 -22 -59 -38 -81 -81 l-28 -53 0 -352 c0 -318 2 -355
19 -391 23 -51 79 -101 128 -114 53 -15 685 -14 738 0 52 15 119 82 134 134
14 53 15 685 0 738 -13 49 -63 105 -114 128 -36 17 -73 19 -391 19 l-352 0
-53 -28z m729 -485 l2 -327 -327 2 -328 3 -3 314 c-2 225 1 318 9 327 10 12
68 14 328 12 l316 -3 3 -328z"
                ></path>
              </g>
            </svg>
          </section>
        </section>

        <section
          ref={mobileLinksRef}
          className="mx-5 my-2 overflow-hidden transition-max-h duration-500 ease-in-out"
        >
          <Link href="/auth/login" className="capitalize block  my-6">
            login
          </Link>
          <Link href="/auth/signup" className="capitalize block  my-6">
            signup
          </Link>
          <Link
            href="https://github.com/adedoyin-emmanuel/agronomix"
            className="capitalize flex items-center gap-x-3 my-6"
          >
            star project
            <FiGithub className="text-accent" />
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
