import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import brosurImage1 from "/src/assets/brosur.png"; // Ganti dengan path gambar brosur yang sesuai
import brosurImage2 from "/src/assets/hero-pondok2.jpg"; // Ganti dengan path gambar brosur yang sesuai
import ImageModal from "./ImageModal"; // Import komponen modal

const Pendaftaran = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900 dark:text-white py-12 pt-40 mt-16 md:mb-50">
      {/* Judul Utama */}
      <h3 className="text-center text-5xl font-bold mb-10 underline">Penerimaan Santri Baru</h3>
      <p className="text-center text-2xl font-bold mb-10 underline">Tahun ajaran 2024/2025</p>

      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Container Brosur Pendaftaran */}
        <div className="w-full md:w-1/2 lg:w-1/2 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-slate-800 mb-8 md:mb-0">
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Brosur Pendaftaran</h2>
            {/* Container untuk scroll horizontal */}
            <div className="flex gap-4 overflow-x-auto mb-4">
              <img
                src={brosurImage1}
                alt="Brosur 1"
                className="w-full h-auto object-cover rounded-md flex-shrink-0 cursor-pointer"
                onClick={() => openModal(brosurImage1)}
              />
              <img
                src={brosurImage2}
                alt="Brosur 2"
                className="w-full h-auto object-cover rounded-md flex-shrink-0 cursor-pointer"
                onClick={() => openModal(brosurImage2)}
              />
            </div>
            <a
              href="/path/to/brosur.pdf" // Ganti dengan path ke brosur yang dapat diunduh
              download
              className="block mt-4 bg-blue-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Download Brosur
            </a>
            {/* Tombol Daftar SMP */}
            <Link
              to="/formulir-smp" // Ubah path ini untuk mengarahkan ke FormulirSmp
              className="block mt-4 bg-green-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMP!
            </Link>
            {/* Tombol Daftar SMA */}
            <Link
              to="/formulir-sma" // Ubah path ini untuk mengarahkan ke FormulirSma
              className="block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMA!
            </Link>
          </div>
        </div>

        {/* Akordeon */}
        <div className="w-full md:w-2/3 lg:w-2/3 max-w-4xl mx-auto">
          <div className="flex flex-col space-y-2">
            {/* Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white px-3 py-2 text-center rounded-md focus:outline-none"
                onClick={() => handleToggle(0)}
              >
                Pendaftaran
              </button>
              {activeIndex === 0 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p className="text-2xl">Pendaftaran Bisa dilakukan dengan mengisi formulir online di website kami Atau Datang langsung ke Pesantren.</p>
                </div>
              )}
            </div>

            {/* Cara Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(1)}
              >
                Cara Pendaftaran
              </button>
              {activeIndex === 1 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Untuk pendaftaran, ikuti langkah-langkah berikut: 1. Pilih Jenjang . 2. Regristasi. 3. Bayar biaya pendaftaran. 4. Isi Formulir . SELESAI.</p>
                </div>
              )}
            </div>

            {/* Informasi Biaya */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(2)}
              >
                Informasi Biaya
              </button>
              {activeIndex === 2 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Biaya pendaftaran adalah Rp. 300.000. Biaya ini sudah termasuk ujian awal dan administrasi.</p>
                </div>
              )}
            </div>

            {/* Kuota */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(3)}
              >
                Kuota
              </button>
              {activeIndex === 3 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Kuota yang diterima adalah 60 siswa untuk setiap angkatan.</p>
                </div>
              )}
            </div>

            {/* Gelombang Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(4)}
              >
                Gelombang Pendaftaran
              </button>
              {activeIndex === 4 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Gelombang pendaftaran terdiri dari 3 gelombang: Gelombang 1 (Januari - Maret), Gelombang 2 (April - Juni), Gelombang 3 (Juli - September).</p>
                </div>
              )}
            </div>

            {/* Ujian */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(5)}
              >
                Ujian
              </button>
              {activeIndex === 5 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Ujian akan dilaksanakan pada bulan Mei dan September untuk menentukan kelulusan.</p>
                </div>
              )}
            </div>

            {/* Pengumuman */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(6)}
              >
                Pengumuman
              </button>
              {activeIndex === 6 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Pengumuman hasil ujian akan diumumkan pada bulan Juni dan Desember.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal imageSrc={modalImage} onClose={closeModal} />
      )}
    </main>
  );
};

export default Pendaftaran;
