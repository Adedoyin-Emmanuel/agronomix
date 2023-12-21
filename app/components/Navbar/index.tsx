"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";
import Image from "next/image";

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
      link: "https://youtube.com/adedoyin-emmanuel/",
      element: <FiYoutube className={navItemsClassname} />,
    },
    {
      link: "https://github.com/Emmysoft_Tm/",
      element: <FiTwitter className={navItemsClassname} />,
    },
  ];
  return (
    <nav className="w-screen flex items-center md:justify-center justify-between md:flex-row flex-col overflow-x-hidden z-10 md:my-1 my-3">
      <h2 className="font-extrabold text-2xl text-secondary  mx-5 md:flex items-center justify-center  hidden cursor-pointer">
        <Link href="/">
          <Image
            src={"/assets/leaf.png"}
            alt="Agronomix logo"
            width={"75"}
            height={"75"}
          />
        </Link>
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
          <h2 className="font-extrabold text-secondary text-[20px]  mx-5">
            <Link href="/">
              <Image
                src={"/assets/leaf.png"}
                alt="Agronomix logo"
                width={"65"}
                height={"65"}
              />
            </Link>
          </h2>

          <section
            className={`hamburger mx-5 transform transition-transform duration-300 ease-in-out  ${
              navToggled ? "-rotate-90 text-secondary" : "rotate-0"
            }`}
            onClick={handleHamburgerClick}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="font-bold"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
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
            href="https://github.com/adedoyin-emmanuel/caresync"
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
