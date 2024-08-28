import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="mb-5 inline-block">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang-kami" className="mb-5 inline-block">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="mb-5 inline-block">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/testimoni" className="mb-5 inline-block">
              Testimoni
            </Link>
          </li>
          <li>
            <Link to="/info-terbaru" className="mb-5 inline-block">
              Info Terbaru
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <h1>© 2022 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
