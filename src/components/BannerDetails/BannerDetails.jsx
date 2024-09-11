import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AOS from "aos";
import "aos/dist/aos.css";

const BannerDetails = ({ reverse = false }) => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleGetStartedClick = () => {
    navigate('/profil-lengkap'); // Mengarahkan ke ProfilLengkap.jsx
  };

  return (
    <main id="tentang-kami" className="bg-slate-100 dark:bg-slate-900 dark:text-white md:py-20">
      {/* Bagian Utama */}
      <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] px-4 md:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Bagian Kiri */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col items-center gap-4 text-center md:items-start md:p-8 md:text-left ${
              reverse ? "md:order-last" : ""
            }`}
          >
            <h1 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl mb-6 underline">
              Tentang Kami
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-base">
              Pondok Pesantren Salafiyah Al Furqon adalah Lembaga Pendidikan
              di bawah naungan Yayasan Islam Al Furqon Magelang (Ustadz
              Muhammad Wujud). Kampus 1 berada di Jl. Tembus Blabak – Boyolali,
              Km. 11, Kompleks Masjid Jami’ Al Ikhlash, Dusun Tlatar, Krogowanan,
              Sawangan, Magelang. Kampus 2 berada di Dusun Bulu Kidul, Podosoko,
              Sawangan, Magelang.
            </p>
            <div className="space-x-4">
              <button
                onClick={handleGetStartedClick} // Tambahkan event handler di sini
                className="rounded-md border-2 border-primary bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Bagian Video */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            className="order-1 md:pl-9"
          >
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/z6g_lh2OAnw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Bagian Tambahan */}
      <section className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 01 - Kenapa Ma'had As-Surkati */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-4">01. Kenapa PPS AL-FURQON</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Hafidz engineer merupakan tagline kita, mencetak generasi Qur'ani yang berilmu dan mampu beradaptasi dengan teknologi wkwk.
            </p>
          </div>

          {/* 02 - VISI */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-4 md:pl-9">02. VISI</h2>
            <p className="text-slate-600 dark:text-slate-400 md:pl-9  text-lg">
              Visi kami adalah: Mencetak generasi yang hafizh Al Qur’an, berakidah lurus, berakhlak mulia dan siap berdakwah di masyarakat.
            </p>
          </div>

          {/* 03 - MISI */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-4">03. MISI</h2>
            <p className="text-slate-600 dark:text-slate-400  text-lg">
              Menanamkan akidah yang benar dan menerapkannya dalam kegiatan sehari-hari.
              Menciptakan lingkungan yang Qur’ani.
              Menumbuhkan sepuluh karakter penunjang visi.
              Membiasakan adab-adab islami dalam kehidupan sehari-hari terhadap teman, guru dan seluruh civitas di dalam pondok serta masyarakat di luar pondok.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BannerDetails;
