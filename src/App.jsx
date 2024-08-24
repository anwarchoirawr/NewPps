import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import komponen
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/navbar/Navbar2";
import Service from "./components/Service/Service";
import Testimoni from "./components/Testimoni/Testimoni";
import InfoTerbaru from "./components/InfoTerbaru/InfoTerbaru";
import Pendaftaran from "./components/Pendaftaran/Pendaftaran";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Banner1 from "./assets/blog1.jpg";
import FullGallery from "./components/FullGallery/FullGallery"; // Pastikan path ini benar

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
    <Router basename="/NewPps">  {/* Sesuaikan dengan nama repositori GitHub-mu */}
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900">
          <Navbar2 />
        </div>

        {/* Routing */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                <BannerDetails id="tentang-kami" reverse={true} img={Banner1} />
                <Banner />
                <Testimoni />
                <InfoTerbaru />
              </>
            }
          />
          <Route path="/gallery" element={<FullGallery />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
