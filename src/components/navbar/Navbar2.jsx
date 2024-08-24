import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className={`relative z-20 border-b-[1px] shadow-lg ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <nav className="container flex h-[70px] items-center justify-between py-2">
          <div className="text-2xl text-white md:text-3xl">
            <a href="/#home">
              <img
                src="src/assets/logo-pondok.png"
                alt="Your Logo"
                className="h-[80px] w-auto"
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div
                  className={`absolute left-0 top-full mt-2 w-[150px] rounded-md bg-white p-2 text-black opacity-0 shadow-lg transform -translate-y-4 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ${
                    theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
                  }`}
                >
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Beranda</li>
                    <li className="p-2 hover:bg-violet-200">Tentang Kami</li>
                    <li className="p-2 hover:bg-violet-200">Gallery</li>
                    <li className="p-2 hover:bg-violet-200">Testimoni</li>
                    <li className="p-2 hover:bg-violet-200">Kajian</li>
                  </ul>
                </div>
              </li>
              {/* WhatsApp section */}
              <div className="flex items-center gap-4">
                <li>
                <FaWhatsapp className="h-[40px] w-[40px] rounded-md bg-green-500 p-2 text-white hover:bg-green-600" />

                </li>
                <div>
                  <p className="text-sm">Hubungi kami</p>
                  <p className="text-lg">
                    <a href="tel:+91123456789">+62 813-9264-5780</a>
                  </p>
                </div>
              </div>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="cursor-pointer text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
