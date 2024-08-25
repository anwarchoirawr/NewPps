import React from "react";
import logo from "/src/assets/logo-pondok.png";
import kampusSatuImage from "/src/assets/kampusSatuImage.jpg";
import kampusDuaImage from "/src/assets/kampusDuaImage.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";

const ImportantLinks = [
  {
    title: "Beranda",
    link: "/#",
  },
  {
    title: "Tentang Kami",
    link: "/#tentang-kami",
  },
  {
    title: "Gallery",
    link: "/#gallery",
  },
  {
    title: "Testimoni",
    link: "/#testimoni",
  },
  {
    title: "Berita Terbaru",
    link: "/#berita-terbaru",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <img src={logo} alt="Logo" className="h-[80px] w-auto mb-3" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Tlatar Sawangan Magelang</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://wa.me/6281392645780"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366]"
              >
                <FaWhatsapp className="text-2xl duration-300" />
              </a>
              <p>+62 813-9264-5780</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F]"
              >
                <FaInstagram className="text-3xl duration-300" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1877F2]"
              >
                <FaFacebook className="text-3xl duration-300" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000]"
              >
                <FaYoutube className="text-3xl duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {ImportantLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Location
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="relative group cursor-pointer">
                  <a
                    href="https://maps.app.goo.gl/KLp1VCn4nCb3hSuz6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={kampusSatuImage}
                      alt="Kampus Satu"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg">Klik link map!</p>
                    </div>
                  </a>
                  <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
                    Kampus Satu
                  </p>
                </li>
                <li className="relative group cursor-pointer">
                  <a
                    href="https://maps.app.goo.gl/LFXceTe3XoaV7BDr8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={kampusDuaImage}
                      alt="Kampus Dua"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg">Klik link map!</p>
                    </div>
                  </a>
                  <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
                    Kampus Dua
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright Section */}
      <div className="bg-gray-200 dark:bg-dark text-center py-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024 PPS AL-FURQON. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
