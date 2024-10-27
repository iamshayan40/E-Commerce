"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/ui/Mode-Toggle";
import AccountDropdown from "@/components/ui/loginToggle";
import CartDropdown from "@/components/ui/cartButton";
import { ComboboxDemo } from "../ui/comboBox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    const timers = [
      setTimeout(() => setProgress(70), 100),
      setTimeout(() => setProgress(100), 800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 900);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#laptops", label: "Laptops" },
    { href: "#phones", label: "Phones" },
    { href: "#gaming-pcs", label: "Computers" },
    { href: "#accessories", label: "Accessories" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="py-4 bg-opacity-50 sticky top-0 backdrop-blur border-b z-10 dark:text-white dark:bg-[#121212]">
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center px-6 md:px-4">
        {/* Light Mode Image */}
        <Image
          src="/dark logo.png"
          className="h-8 w-44 dark:hidden" // Hide in dark mode
          alt="Logo"
          width={170}
          height={90}
        />

        {/* Dark Mode Image */}
        <Image
          src="/Modern Typography Electronic Logo.png"
          className="h-8 w-44 hidden dark:block" // Show only in dark mode
          alt="Logo"
          width={170}
          height={90}
        />

        <div className="hidden md:flex flex-grow items-center justify-center">
          <ul className="flex space-x-8 uppercase items-center mx-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:scale-105 hover:font-semibold transition-all duration-300 font-lexend font-light text-[0.9vw]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Items */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="hidden lg:flex">
            <ComboboxDemo />
          </div>
          <ModeToggle />
          <AccountDropdown />
          <CartDropdown />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <i className="ri-menu-4-line text-2xl text-black dark:text-white transition-transform duration-300"></i>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4 flex flex-col h-full">
              <div>
                <SheetHeader>
                  <SheetTitle className="text-3xl font-bold font-monty pt-6">
                    CircuitCart
                    <div className="flex justify-center items-center mt-4">
                      <ModeToggle />
                      <AccountDropdown />
                      <CartDropdown />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col items-center space-y-6 mt-20">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block font-lexend font-extralight text-gray-700 dark:text-gray-200 text-2xl"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Social Icons - Positioned at the Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-48 flex items-center justify-center">
                <div className="flex space-x-6 -mb-4">
                  {/* Each icon without animation */}
                  {[
                    { href: "https://github.com/iamshayan40", icon: faGithub },
                    { href: "https://www.facebook.com/", icon: faFacebookF },
                    {
                      href: "https://pk.linkedin.com/in/iamshayan40",
                      icon: faLinkedin,
                    },
                    {
                      href: "https://instagram.com/iamshayan40",
                      icon: faInstagram,
                    },
                    {
                      href: "mailto:shayanwaseem.50@gmail.com",
                      icon: faEnvelope,
                    },
                  ].map(({ href, icon }, index) => (
                    <Link
                      key={index}
                      href={href}
                      className="text-white transition-colors duration-300"
                      target="_blank" // Open link in a new tab
                      rel="noopener noreferrer" // Security best practice
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        size="xl"
                        className="transition-colors duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 w-full items-center justify-center pr-12 pl-4">
                <ComboboxDemo />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
