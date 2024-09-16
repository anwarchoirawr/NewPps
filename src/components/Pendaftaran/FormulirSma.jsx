import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa'; // Import ikon copy

const FormulirSma = () => {
  const [formData, setFormData] = useState({
    namaAnak: '',
    namaWali: '',
    umur: '',
    noHpWali: '',
    metodePembayaran: '',
    buktiPembayaran: null,
    sudahMembayar: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isTransferPopupVisible, setIsTransferPopupVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false); // State untuk menandai apakah nomor rekening sudah disalin
  const [isFormValid, setIsFormValid] = useState(false); // State untuk mengatur status validitas form
  const formRef = useRef(null);
  const navigate = useNavigate();

  const saveFormData = (data) => {
    localStorage.setItem('formDataSma', JSON.stringify(data));
  };

  const loadFormData = () => {
    const savedData = localStorage.getItem('formDataSma');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return null;
  };

  useEffect(() => {
    const savedData = loadFormData();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    setIsFormValid(formData.sudahMembayar); // Update status tombol ketika checkbox berubah
  }, [formData.sudahMembayar]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let newFormData = { ...formData, [name]: type === 'file' ? files[0] : value };
    setFormData(newFormData);
    saveFormData(newFormData);

    if (name === 'metodePembayaran') {
      if (value === 'Transfer Bank') {
        setIsTransferPopupVisible(true);
      } else {
        setIsTransferPopupVisible(false);
      }
    }
  };

  const handleCheckboxChange = (e) => {
    const newFormData = { ...formData, sudahMembayar: e.target.checked };
    setFormData(newFormData);
    saveFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.namaAnak || !formData.namaWali || !formData.umur || !formData.noHpWali || !formData.metodePembayaran) {
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

    const formDataToSend = new FormData();
    formDataToSend.append('namaAnak', formData.namaAnak);
    formDataToSend.append('namaWali', formData.namaWali);
    formDataToSend.append('umur', formData.umur);
    formDataToSend.append('noHpWali', formData.noHpWali);
    formDataToSend.append('metodePembayaran', formData.metodePembayaran);
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
        localStorage.removeItem('formDataSma');
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
      window.scrollBy(0, -60);
    }
  }, []);

  const handleClosePopup = () => {
    setIsTransferPopupVisible(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('713697889');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset status setelah 2 detik
  };

  return (
    <div className="relative max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg mt-20">
      {isTransferPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Informasi Pembayaran</h3>
            <p>Silahkan transfer sebesar Rp 300.000 ke:</p>
            <p className="font-semibold">
              BSI <br />
              <span className="text-black font-bold flex items-center">
                713697889
                <FaClipboard
                  onClick={handleCopyToClipboard}
                  className="ml-2 text-gray-600 cursor-pointer hover:text-gray-800"
                  title="Salin nomor rekening"
                />
                {isCopied && <FaClipboardCheck className="ml-2 text-green-600" title="Nomor rekening disalin!" />}
              </span>
              <br />
              (AN. PPS ALFURQON)
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

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

      <h2 className="text-2xl font-semibold mb-4 text-center">Pendaftaran SMA/Wustho</h2>
      <div ref={formRef} className="pt-16">
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="umur" className="block text-sm font-medium text-gray-700">Umur Ananda</label>
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
            <label htmlFor="noHpWali" className="block text-sm font-medium text-gray-700">No. HP Wali</label>
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
            <label htmlFor="metodePembayaran" className="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
            <select
              id="metodePembayaran"
              name="metodePembayaran"
              value={formData.metodePembayaran}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Pilih Metode</option>
              <option value="Transfer Bank">Transfer Bank</option>
              </select>
          </div>

          {formData.metodePembayaran === 'Transfer Bank' && (
            <div>
              <label htmlFor="buktiPembayaran" className="block text-sm font-medium text-gray-700">Bukti Pembayaran</label>
              <input
                type="file"
                id="buktiPembayaran"
                name="buktiPembayaran"
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="sudahMembayar"
              name="sudahMembayar"
              checked={formData.sudahMembayar}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="sudahMembayar" className="ml-2 block text-sm text-gray-900">Saya sudah membayar</label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
              isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormulirSma;
