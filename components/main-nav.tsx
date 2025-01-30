"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Church Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link
              href="/departments"
              className="text-gray-600 hover:text-primary"
            >
              Departments
            </Link>
            <Link
              href="/administrative-entities"
              className="text-gray-600 hover:text-primary"
            >
              Administrative Entities
            </Link>
            <Link
              href="/institutions"
              className="text-gray-600 hover:text-primary"
            >
              Institutions
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-primary">
              News
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-primary">
              Resources
            </Button>
            <Button variant="ghost" className="text-primary">
              Our Identity
            </Button>
            <Button variant="ghost" className="text-primary">
              Our Belief
            </Button>
            <Link href="#" className="text-gray-600 hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
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
                About
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
                Administrative Entities
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
