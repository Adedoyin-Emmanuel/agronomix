import Button from "./components/Button";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <section>
        <Navbar />
        <section className="m-auto w-full">
          <div className="container mx-auto py-5 md:py-16 px-4  lg:flex lg:items-start overflow-x-hidden">
            <section className="hero flex items-center justify-center">
              <h1 className="capitalize font-bold lg:text-4xl text-3xl">elevate your agro shopping experience</h1>
            </section>
          </div>
        </section>
    </section>
  );
}
