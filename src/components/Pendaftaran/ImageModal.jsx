import React, { useState } from "react";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const handleZoomToggle = (e) => {
    e.stopPropagation(); // Menghindari klik pada gambar menutup modal
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative p-4 bg-white rounded-md dark:bg-slate-800"
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <img
          src={imageSrc}
          alt="Brosur"
          className={`rounded-md object-contain cursor-pointer transition-transform duration-300 ease-in-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
          }}
          onClick={handleZoomToggle}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
