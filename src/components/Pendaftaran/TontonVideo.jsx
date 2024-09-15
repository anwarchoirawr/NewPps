import React from "react";
import videoTutorial from "/src/assets/video/TrialPendaftaran.mp4"; // Ganti dengan path video yang sesuai

const TontonVideo = () => {
  const handleHubungiKami = () => {
    window.location.href = "https://wa.me/1234567890"; // Ganti dengan nomor WhatsApp yang sesuai
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900 dark:text-white py-12 pt-40 mt-16">
      {/* Judul Utama */}
      <h3 className="text-center text-5xl font-bold mb-10 underline">Video Tutorial Pendaftaran</h3>

      <section className="container mx-auto px-4">
        {/* Video Tutorial */}
        <div className="w-full max-w-3xl mx-auto">
          <video
            controls
            src={videoTutorial}
            className="w-full h-auto rounded-md shadow-lg"
            // alt atribut tidak diperlukan di sini untuk elemen video
          />
        </div>

        {/* Tombol Hubungi Kami */}
        <div className="text-center mt-8">
          <button
            onClick={handleHubungiKami}
            className="bg-green-500 text-white px-6 py-2 rounded-md text-2xl"
          >
            Hubungi Kami
          </button>
        </div>
      </section>
    </main>
  );
};

export default TontonVideo;
