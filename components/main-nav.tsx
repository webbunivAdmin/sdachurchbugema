"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-16 z-50 transition-all duration-300 lg:pr-[30px] ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white"} `}>
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Church Logo"
              width={180}
              height={50}
              className="h-[100px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 ">
            <Link href="/">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                About
              </Button>
            </Link>
            <Link href="/institutions">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                Institutions
              </Button>
            </Link>
            <Link href="/news">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                News
              </Button>
            </Link>
            <Link href="/our-identity">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                Our Identity
              </Button>
            </Link>
            <Link href="/our-belief">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                Our Belief
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost" className="text-[#2F557F] text-base">
                Resources
              </Button>
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#" className="text-[#2F557F] hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#2F557F] hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#2F557F] hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/departments"
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Departments
              </Link>
              <Link
                href="/administrative-entities"
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Entities
              </Link>
              <Link
                href="/institutions"
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Institutions
              </Link>
              <Link
                href="/news"
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Our Identity
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Our Belief
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
