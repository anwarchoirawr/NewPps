import React from 'react';
import QrCodeImage from '/src/assets/qrcode.png'; // Pastikan Anda memiliki gambar QR code di folder assets

const Pembayaran = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Pembayaran</h1>
      <p className="text-center mb-3">Transfer secara manual ke nomor rekening:</p>
      <p className="text-center font-bold text-lg mb-5">7136979889 (Bank ABC)</p>
      
      <div className="text-center">
        <p>Atau, Anda bisa melakukan pembayaran melalui QRIS:</p>
        <img src={QrCodeImage} alt="QR Code Pembayaran" className="mx-auto my-5 w-1/3" />
        <button className="bg-blue-500 text-white px-5 py-2 rounded">Download QR Code</button>
      </div>
    </div>
  );
}

export default Pembayaran;
