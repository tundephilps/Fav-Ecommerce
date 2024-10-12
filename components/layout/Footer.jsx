import React from "react";
import FooterLogo from "../../images/Footer.png";
import Scan from "../../images/Scan.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="pt-12 lg:pt-16 bg-black">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-white">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 text-white">
            <div className="col-span-full lg:col-span-1 ">
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <Image
                    src={FooterLogo}
                    className="w-[180px] h-[100px] mt-6"
                  />
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    111, Bijoy serani, Dhaka,Bangladeshi
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    exclusive@gmail.com
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    +88015-88888-9999
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Account
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    My Account
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Login/Register
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cart
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Shop
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Quick Link
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Term Of Use
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>

            {/* <div>
              <img src={Scan} className="h-full w-full" />
            </div> */}
            <div className="bg-white/5 text-start p-6 rounded-lg">
              {/* Header */}
              <h2 className="text-white text-start text-lg font-bold mb-4">
                Download App
              </h2>

              <p className="text-gray-200 mb-4 text-sm">
                Scan to download our app
              </p>
              {/* App Store & Play Store Buttons */}
              <Image src={Scan} className="pb-4" />
              {/* Social Icons */}
              <div className="flex justify-center gap-6 text-white text-2xl">
                <a
                  href="https://facebook.com/favorselectofficial"
                  aria-label="Facebook"
                >
                  <FaFacebook className="hover:text-[#F52828]" />
                </a>
                <a href="https://x.com/FavorSelect" aria-label="Twitter">
                  <FaXTwitter className="hover:text-[#F52828]" />
                </a>
                <a
                  href="https://instagram.com/FavorSelect"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-[#F52828]" />
                </a>
                <a
                  href="https://linkedin.com/company/favorselect"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="hover:text-[#F52828]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t py-8 text-center text-sm text-gray-400">
            © Copyright FavorSelect 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
