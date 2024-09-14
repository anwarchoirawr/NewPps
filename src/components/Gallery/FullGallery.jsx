import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "/src/assets/futsal.jpg";
import heroImage2 from "/src/assets/kenaikan-sabuk.jpg";
import heroImage3 from "/src/assets/sholatJamaah.jpg";
import heroImage4 from "/src/assets/hero-pondok1.jpeg";
import heroImage5 from "/src/assets/hero-pondok3.jpeg";
import heroImage6 from "/src/assets/paskibra.jpg";



const FullGallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: heroImage1, alt: "Kajian Ahad", description: "Futsal" },
    { src: heroImage2, alt: "Kenaikan Sabuk", description: "Kenaikan sabuk" },
    { src: heroImage3, alt: "Gambar 3", description: "Sholat jamaah Santri MA" },
    { src: heroImage4, alt: "Gambar 4", description: "Kajian" },
    { src: heroImage5, alt: "Gambar 5", description: "Upacara" },
    { src: heroImage6, alt: "Gambar 5", description: "Paskibra" },

  ];

  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dimuat
  }, []);

  return (
    <main className="bg-black pt-16 pb-8">
      <section className="container py-8 md:py-12 mt-16">
        <h2 className="text-2xl font-bold text-center lg:text-center text-white md:text-4xl md:pl-9 lg:text-5xl mb-6 underline">
          Gallery Kegiatan
        </h2>
        <div className="p-3 md:p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:place-items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg w-full"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Kegiatan
                  </h3>
                  <p className="text-white text-center text-sm px-4">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              onClick={handleBack}
            >
              Kembali
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on image
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default FullGallery;
