import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import komponen
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/Navbar/Navbar2";
import Service from "./components/Service/Service";
import Testimoni from "./components/Testimoni/Testimoni";
import InfoTerbaru from "./components/InfoTerbaru/InfoTerbaru";
import Pendaftaran from "./components/Pendaftaran/Pendaftaran";
import FormulirSmp from "./components/Pendaftaran/FormulirSmp";
import FormulirSma from "./components/Pendaftaran/FormulirSma";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import FullGallery from "./components/Gallery/FullGallery";
import ProfilLengkap from "./components/BannerDetails/ProfilLengkap"

// Import assets
import Banner1 from "./assets/blog1.jpg";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router basename="/NewPps">
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900">
          <Navbar2 />
        </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                <BannerDetails id="tentang-kami" reverse={true} img={Banner1} />
                <Gallery />
                <Testimoni />
                <InfoTerbaru />
              </>
            }
          />
          <Route path="/gallery" element={<FullGallery />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/formulir-smp" element={<FormulirSmp />} />
          <Route path="/formulir-sma" element={<FormulirSma />} />
          
          {/* Tambahkan rute untuk ProfilLengkap */}
          <Route path="/profil-lengkap" element={<ProfilLengkap />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
