import React, { useState } from "react";
import heroImage1 from "/src/assets/futsal.jpg";
import heroImage2 from "/src/assets/kenaikan-sabuk.jpg";
import heroImage3 from "/src/assets/persahabatan.jpeg";
import heroImage4 from "/src/assets/hero-pondok1.jpeg";
import heroImage5 from "/src/assets/hero-pondok3.jpeg";

const FullGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: heroImage1, alt: "Kajian Ahad", description: "Futsal" },
    { src: heroImage2, alt: "Kenaikan Sabuk", description: "Kenaikan sabuk" },
    { src: heroImage3, alt: "Gambar 3", description: "Persahabatan" },
    { src: heroImage4, alt: "Gambar 4", description: "Kajian" },
    { src: heroImage5, alt: "Gambar 5", description: "Upacara" },
    // Tambahkan lebih banyak gambar di sini jika diperlukan
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-5xl mb-6 underline">
        Gallery Lengkap
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              data-aos={`flip-${index % 2 === 0 ? "left" : "right"}`}
              data-aos-duration="800"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold mb-2">
                {image.description}
              </h3>
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default FullGallery;
