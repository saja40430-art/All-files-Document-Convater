
import React, { useState } from 'react';

const QRGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const qrUrl = text ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}` : null;

  const download = async () => {
    if (!qrUrl) return;
    const response = await fetch(qrUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="space-y-6 text-center">
      <div className="bg-[#2B2D42] p-6 rounded-lg">
        <input 
          type="text" 
          placeholder="Enter URL or text..."
          className="w-full bg-[#1E1E2F] p-4 rounded border border-white/10 text-white focus:ring-2 focus:ring-[#FFD700]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {text && (
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-2xl">
            <img src={qrUrl!} alt="QR Code" className="w-64 h-64" />
          </div>
          <button 
            onClick={download}
            className="px-8 py-3 bg-[#FFD700] text-black font-bold rounded hover:bg-[#E6C200] transition-all"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
