import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "/src/assets/logo-pondok.png";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // Gunakan useNavigate

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Fungsi untuk scroll ke ID tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`relative z-20 border-b-[1px] shadow-lg transform transition-transform duration-700 ease-in-out ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-40 h-auto mr-4" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              to="/"
              onClick={() => setTimeout(() => scrollToSection("tentang-kami"), 100)} // Scroll ke Tentang Kami
              className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Tentang Kami
            </Link>
            <Link
              to="/gallery"
              className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Gallery
            </Link>
            <Link
              to="/testimoni"
              className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Testimoni
            </Link>
            <Link
              to="/info-terbaru"
              className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Info Terbaru
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
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
            <div className="md:hidden flex items-center space-x-4">
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
          </div>
        </div>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
