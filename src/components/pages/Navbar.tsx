"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/ui/Mode-Toggle";
import AccountDropdown from "@/components/ui/loginToggle";
import CartDropdown from "@/components/ui/cartButton";
import { ComboboxDemo } from "../ui/comboBox";

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
    { href: "#home", label: "Suits" },
    { href: "#shop", label: "Kurta" },
    { href: "#about", label: "Pants" },
    { href: "#contact", label: "Shirts" },
    { href: "#blog", label: "About Us" },
    { href: "#support", label: "Contact" },
  ];

  return (
    <nav className="p-4 bg-opacity-50 sticky top-0 backdrop-blur border-b z-10 dark:text-white dark:bg-zinc-900">
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-extrabold font-monty">CircuitCart</h2>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8 uppercase items-center ">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:scale-105 hover:font-semibold transition-all duration-300 font-lexend font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-1">
              <ComboboxDemo/>
              <ModeToggle />
              <AccountDropdown />
              <CartDropdown />
            </div>
          </div>
      </div>
        </nav>
    
  );
};

export default Navbar;
