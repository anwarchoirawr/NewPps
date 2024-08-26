// src/components/FormulirSma.jsx

import React, { useState, useRef, useEffect } from 'react';

const FormulirSma = () => {
  const [formData, setFormData] = useState({
    namaAnak: '',
    namaAyah: '',
    namaIbu: '',
    umur: '',
    asal: '',
  });

  const [showNotification, setShowNotification] = useState(false); // State untuk notifikasi
  const formRef = useRef(null); // Ref untuk formulir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      namaAnak: '',
      namaAyah: '',
      namaIbu: '',
      umur: '',
      asal: '',
    });
    setShowNotification(true); // Tampilkan notifikasi
    setTimeout(() => setShowNotification(false), 5000); // Sembunyikan notifikasi setelah 5 detik
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      window.scrollBy(0, -60); // Sesuaikan nilai untuk menggeser ke atas
    }
  }, []);

  return (
    <div className="relative max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg mt-20">
      {/* Notifikasi */}
      {showNotification && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
            <p className="text-center">Barakallahu fiikum! Pendaftaran berhasil. Silahkan konfirmasi ke nomor WA +62 813-9264-5780.</p>
          </div>
        </div>
      )}
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Formulir Pendaftaran SMA</h2>
      <div ref={formRef} className="pt-16"> {/* Margin atas tambahan */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields */}
          <div>
            <label htmlFor="namaAnak" className="block text-sm font-medium text-gray-700">Nama Anak</label>
            <input
              type="text"
              id="namaAnak"
              name="namaAnak"
              value={formData.namaAnak}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="namaAyah" className="block text-sm font-medium text-gray-700">Nama Ayah</label>
            <input
              type="text"
              id="namaAyah"
              name="namaAyah"
              value={formData.namaAyah}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="namaIbu" className="block text-sm font-medium text-gray-700">Nama Ibu</label>
            <input
              type="text"
              id="namaIbu"
              name="namaIbu"
              value={formData.namaIbu}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="umur" className="block text-sm font-medium text-gray-700">Umur</label>
            <input
              type="number"
              id="umur"
              name="umur"
              value={formData.umur}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="asal" className="block text-sm font-medium text-gray-700">Asal Sekolah</label>
            <input
              type="text"
              id="asal"
              name="asal"
              value={formData.asal}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormulirSma;
