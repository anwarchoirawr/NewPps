import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FormulirSma = () => {
  const [formData, setFormData] = useState({
    namaAnak: '',
    namaWali: '',
    umur: '',
    noHpWali: '',
    asalSekolah: '',
    buktiPembayaran: null,
    sudahMembayar: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef(null);

  const navigate = useNavigate(); // Menginisialisasi hook useNavigate

  // Function untuk menyimpan data form di localStorage
  const saveFormData = (data) => {
    localStorage.setItem('formDataSma', JSON.stringify(data));
  };

  // Function untuk memuat data form dari localStorage
  const loadFormData = () => {
    const savedData = localStorage.getItem('formDataSma');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return null;
  };

  // Saat form pertama kali di-load, kita ambil data dari localStorage
  useEffect(() => {
    const savedData = loadFormData();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let newFormData = { ...formData, [name]: type === 'file' ? files[0] : value };
    setFormData(newFormData);
    saveFormData(newFormData); // Simpan data setiap kali terjadi perubahan
  };

  const handleCheckboxChange = (e) => {
    const newFormData = { ...formData, sudahMembayar: e.target.checked };
    setFormData(newFormData);
    saveFormData(newFormData); // Simpan data ketika checkbox berubah
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validasi sederhana
    if (!formData.namaAnak || !formData.namaWali || !formData.umur || !formData.noHpWali || !formData.asalSekolah) {
      setErrorMessage('Semua field harus diisi');
      return;
    }

    if (formData.umur <= 0) {
      setErrorMessage('Umur harus lebih dari 0');
      return;
    }

    if (!formData.sudahMembayar) {
      setErrorMessage('Harap centang checklist sudah membayar');
      return;
    }

    // Upload file bukti pembayaran
    const formDataToSend = new FormData();
    formDataToSend.append('namaAnak', formData.namaAnak);
    formDataToSend.append('namaWali', formData.namaWali);
    formDataToSend.append('umur', formData.umur);
    formDataToSend.append('noHpWali', formData.noHpWali);
    formDataToSend.append('asalSekolah', formData.asalSekolah);
    formDataToSend.append('buktiPembayaran', formData.buktiPembayaran);

    try {
      const response = await fetch('http://localhost/NewPps/server/FormSma.php', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengirimkan data');
      }

      const data = await response.json();
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setSuccessMessage(data.message);
        localStorage.removeItem('formDataSma'); // Hapus data dari localStorage jika form sukses
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      window.scrollBy(0, -60); // Sesuaikan nilai untuk menggeser ke atas
    }
  }, []);

  return (
    <div className="relative max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg mt-20">
      {/* Notifikasi */}
      {errorMessage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
            <p className="text-center">{errorMessage}</p>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
            <p className="text-center">{successMessage}</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-center">Pendaftaran SMa/Aliyah</h2>
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
            <label htmlFor="namaWali" className="block text-sm font-medium text-gray-700">Nama Wali</label>
            <input
              type="text"
              id="namaWali"
              name="namaWali"
              value={formData.namaWali}
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
            <label htmlFor="noHpWali" className="block text-sm font-medium text-gray-700">No HP Wali</label>
            <input
              type="text"
              id="noHpWali"
              name="noHpWali"
              value={formData.noHpWali}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="asalSekolah" className="block text-sm font-medium text-gray-700">Asal Sekolah</label>
            <input
              type="text"
              id="asalSekolah"
              name="asalSekolah"
              value={formData.asalSekolah}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={() => navigate('/pembayaran')} // Navigasi dengan useNavigate
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              Lanjut ke Pembayaran
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormulirSma;
