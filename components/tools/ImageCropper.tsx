
import React, { useState, useRef } from 'react';

const ImageCropper: React.FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImg(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const cropCenter = () => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = img;
    image.onload = () => {
      // Logic for 1:1 center crop
      const size = Math.min(image.width, image.height);
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(image, (image.width - size) / 2, (image.height - size) / 2, size, size, 0, 0, size, size);
      const dataUrl = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = 'cropped.png';
      link.href = dataUrl;
      link.click();
    };
  };

  return (
    <div className="space-y-6 text-center">
      <div className="bg-[#2B2D42] p-8 rounded-xl">
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
      {img && (
        <div className="space-y-6">
          <div className="max-h-64 overflow-hidden rounded inline-block shadow-2xl">
            <img src={img} alt="Original" className="max-w-full" />
          </div>
          <button onClick={cropCenter} className="block w-full py-4 bg-[#FFD700] text-black font-bold rounded-xl">
            Auto Center Crop (1:1) & Download
          </button>
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageCropper;
