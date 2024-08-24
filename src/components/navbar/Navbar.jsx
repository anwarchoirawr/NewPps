import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa"; // Import FaWhatsapp

const Navbar = () => {
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery?.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
    }
  }, [theme]);

  darkQuery.addEventListener("change", onWindowMatch);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <header
      data-aos="fade"
      data-aos-duration="300"
      className="relative z-20 border-b-[1px] border-primary/50 bg-white text-black shadow-lg"
    >
      <nav className="container flex h-[90px] items-center justify-between py-2">
        <div className="text-2xl text-white md:text-3xl">
          <a href="/#home">
            <img
              src="URL_KE_GAMBAR_LOGO"
              alt="Logo Sekolah"
              className="h-auto max-h-[50px]"
            />
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            {/* Dropdown Menu */}
            <li className="relative group cursor-pointer">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div
                className="absolute left-0 top-full mt-2 hidden w-[150px] rounded-md bg-white p-2 text-black opacity-0 transform -translate-y-4 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:block"
              >
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Beranda</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Gallery</li>
                  <li className="p-2 hover:bg-violet-200">Testimoni</li>
                  <li className="p-2 hover:bg-violet-200">Kajian</li>
                </ul>
              </div>
            </li>

            {/* Dropdown Menu 2 */}
            <li className="relative group cursor-pointer">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div
                className="absolute left-0 top-full mt-2 hidden w-full rounded-b-3xl bg-white p-2 text-black opacity-0 transform -translate-y-4 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:block"
              >
                <div className="grid grid-cols-3 gap-5">
                  <div className="overflow-hidden">
                    <img
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      src="https://picsum.photos/200"
                      alt="pics"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold">Best Selling</h1>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur exercitationem delectus iusto animi aperiam
                      deleniti reprehenderit doloribus, numquam corporis quae.
                    </p>
                    <div className="grid grid-cols-3">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Web development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          IOS App Development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Cloud Services
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Mobile App
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <div>
                        <img src="https://picsum.photos/180" alt="no image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="cursor-pointer">
              <a href="/#contact">Contact</a>
            </li>
            <div className="flex items-center gap-4">
              <li>
              <FaWhatsapp className="h-[40px] w-[40px] rounded-md bg-green-500 p-2 text-white hover:bg-green-600 !important" />


              </li>
              <li>
                <div>
                  <p className="text-sm">Chat us on</p>
                  <p className="text-lg">+91 123456789</p>
                </div>
              </li>
            </div>
            <button onClick={() => handleThemeChange("dark")}>dark</button>
            <button onClick={() => handleThemeChange("light")}>light</button>
          </ul>
        </div>
        <div className="block md:hidden">
          <BiMenu className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
