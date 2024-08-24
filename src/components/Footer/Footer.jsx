import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"; // Import ikon media sosial
import logo from "/src/assets/logo-pondok.png"; // Ganti dengan path logo sekolah
import mapImage1 from "/src/assets/hero-pondok2.jpg"; // Ganti dengan path gambar peta kampus satu
import mapImage2 from "/src/assets/hero-pondok2.jpg"; // Ganti dengan path gambar peta kampus dua

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Logo Sekolah */}
        <div className="flex items-start mb-4 md:mb-0">
          <img
            src={logo}
            alt="Logo Sekolah"
            className="w-40 h-auto md:w-48 md:h-auto"
          />
        </div>

        {/* Link Peta Kampus */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <div className="relative group">
            <a
              href="https://maps.google.com/?q=Kampus+Satu" // Ganti dengan link peta kampus satu
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <img
                src={mapImage1}
                alt="Peta Kampus Satu"
                className="w-48 h-auto rounded-lg border border-gray-600 transition-transform transform group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 bg-gray-900 bg-opacity-75 p-2 rounded-lg transition-opacity">Klik link map!</span>
            </a>
            <p className="text-center mt-2">Kampus Satu</p>
          </div>

          <div className="relative group">
            <a
              href="https://maps.google.com/?q=Kampus+Dua" // Ganti dengan link peta kampus dua
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <img
                src={mapImage2}
                alt="Peta Kampus Dua"
                className="w-48 h-auto rounded-lg border border-gray-600 transition-transform transform group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 bg-gray-900 bg-opacity-75 p-2 rounded-lg transition-opacity">Klik link map!</span>
            </a>
            <p className="text-center mt-2">Kampus Dua</p>
          </div>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex flex-col items-center gap-4 mb-4 md:mb-0">
          <p className="text-lg font-semibold mb-2">IKUTI KAMI!</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/yourpage" // Ganti dengan link Facebook
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://youtube.com/yourchannel" // Ganti dengan link YouTube
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://instagram.com/yourprofile" // Ganti dengan link Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sekolah. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
