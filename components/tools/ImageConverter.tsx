
import React, { useState, useRef } from 'react';

const ImageConverter: React.FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const [format, setFormat] = useState('image/png');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImg(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleConvert = () => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = img;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL(format);
      const link = document.createElement('a');
      link.download = `converted-image.${format.split('/')[1]}`;
      link.href = dataUrl;
      link.click();
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#2B2D42] p-6 rounded-lg border border-white/5">
        <label className="block mb-2 font-bold">Upload Image</label>
        <input type="file" accept="image/*" onChange={handleUpload} className="w-full text-sm" />
      </div>

      {img && (
        <>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block mb-2">Select Format</label>
              <select 
                value={format} 
                onChange={(e) => setFormat(e.target.value)}
                className="w-full bg-[#3A3D5B] p-2 rounded border border-white/10"
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/webp">WEBP</option>
              </select>
            </div>
            <button 
              onClick={handleConvert}
              className="px-8 py-3 bg-[#FFD700] text-black font-bold rounded"
            >
              Convert & Download
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <img src={img} alt="Preview" className="max-h-64 rounded shadow-md" />
          </div>
        </>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageConverter;
