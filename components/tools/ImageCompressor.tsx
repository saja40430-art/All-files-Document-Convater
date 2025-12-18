
import React, { useState, useRef } from 'react';

const ImageCompressor: React.FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.5);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImg(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCompress = () => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = img;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      const link = document.createElement('a');
      link.download = `compressed-image.jpg`;
      link.href = dataUrl;
      link.click();
    };
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#2B2D42] p-6 rounded-lg">
        <input type="file" accept="image/*" onChange={handleUpload} className="w-full" />
      </div>

      {img && (
        <>
          <div>
            <label className="block mb-2">Compression Quality: {Math.round(quality * 100)}%</label>
            <input 
              type="range" min="0.1" max="1" step="0.1" 
              value={quality} onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full accent-[#FFD700]"
            />
          </div>
          <button onClick={handleCompress} className="w-full py-3 bg-[#FFD700] text-black font-bold rounded">
            Compress & Download
          </button>
          <img src={img} alt="Preview" className="max-h-64 mx-auto rounded" />
        </>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageCompressor;
