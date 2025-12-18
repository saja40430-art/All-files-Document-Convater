
import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#FFD700');

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    alert('Copied to clipboard!');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 flex flex-col items-center">
        <div 
          className="w-full aspect-square rounded-2xl shadow-2xl border-4 border-white/10 transition-colors duration-300" 
          style={{ backgroundColor: color }} 
        />
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="w-full h-16 bg-transparent cursor-pointer rounded-xl overflow-hidden"
        />
      </div>

      <div className="space-y-4">
        {[
          { label: 'HEX', value: color.toUpperCase() },
          { label: 'RGB', value: hexToRgb(color) },
        ].map((item) => (
          <div key={item.label} className="bg-[#2B2D42] p-6 rounded-xl border border-white/5">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-mono text-[#FFD700]">{item.value}</span>
              <button 
                onClick={() => copy(item.value)}
                className="bg-white/5 hover:bg-white/10 p-2 rounded text-xs uppercase"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
