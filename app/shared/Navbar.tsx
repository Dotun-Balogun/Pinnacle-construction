'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo-construction.png";
import NavList from "./NavList";
import { FaBars, FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="z-1000 max-w-7x; mx-auto py-4 lg:px-10 ">
      <div className="flex items-center text-secondary gap-x-10 justify-between">
        {/* <Link href="/"> */}
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="company logo"
              width={160}
              height={48}
              className="w-40 h-12 object-contain lg:w-48 lg:h-16 transition-all"
              priority
            />
          </Link>
        {/* </Link> */}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center  gap-10">
          <NavList />

          <button 
            className="hover:text-primary transition-colors"
            aria-label="Search"
          >
            <FaSearch size={20} />
          </button>

          <Button className="px-6 text-secondary text-base py-6 rounded-none hover:text-white hover:bg-secondary transition-colors">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden px-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <FaBars size={30} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] bg-primary px-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" onClick={handleCloseMobileMenu}>
                  <Image 
                    src={logo} 
                    alt="logo" 
                    width={200} 
                    height={60}
                    className="mb-8 z-20 "
                  />
                </Link>
                
                <NavList isMobile onLinkClick={handleCloseMobileMenu} />
                
                <div className="hidden lg:flex flex-col gap-4 mt-4">
                  <button 
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    aria-label="Search"
                  >
                    <FaSearch size={20} />
                    <span>Search</span>
                  </button>
                  
                  <Button 
                    className="w-full  px-6 text-secondary py-6 rounded-none hover:text-white hover:bg-secondary transition-colors"
                    onClick={handleCloseMobileMenu}
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;