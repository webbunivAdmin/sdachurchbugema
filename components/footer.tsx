import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PiTiktokLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 md:pr-[80px]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-aos="fade-up">
            <Image
              src="/logo.png"
              alt="Church Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-400">
              SEVENTH-DAY ADVENTIST CHURCH <br /> BUGEMA UNIVERSITY
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-400">P.O Box 6529 </p>
            <p className="text-gray-400">kampala Uganda,</p>
            <p className="text-gray-400">32km Gayaza - Zirobwe Rd —</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-4">Say hello</h3>
            <p className="text-gray-400 underline mb-2">
              infosdacbugemauniversity@bugemauniv.ac.ug
            </p>
            <p className="text-gray-400">+256 772 517374</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0" data-aos="fade-up">
            <Link href="#" className="text-gray-400 hover:text-white">
              Our beliefs
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Contacts
            </Link>
          </div>
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <PiTiktokLogoBold className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <p
          className="text-center text-gray-400 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
