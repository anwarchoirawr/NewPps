import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
       
        <nav className="mt-5">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#" className="mb-5 inline-block">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Kajian
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2022 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
