import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <nav className="mt-5">
        <ul className="space-y-4 text-xl">
          <li>
            <Link to="/" className="mb-5 inline-block hover:text-gray-400 transition-colors duration-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang-kami" className="mb-5 inline-block hover:text-gray-400 transition-colors duration-300">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="mb-5 inline-block hover:text-gray-400 transition-colors duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/testimoni" className="mb-5 inline-block hover:text-gray-400 transition-colors duration-300">
              Testimoni
            </Link>
          </li>
          <li>
            <Link to="/info-terbaru" className="mb-5 inline-block hover:text-gray-400 transition-colors duration-300">
              Info Terbaru
            </Link>
          </li>
        </ul>
        <a
          href="https://wa.me/6281392645780" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
        >
          Hubungi Kami
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://www.instagram.com/pesantren_salafiyah_alfurqon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.facebook.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.youtube.com/@al-ikhlashmagelang4745" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </nav>
      <div className="footer mt-10 text-center">
        <h1 className="text-sm text-gray-400">© PPS AL-FURQON 2024</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
