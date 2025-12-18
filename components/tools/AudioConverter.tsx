
import React, { useState } from 'react';

const AudioConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-6 text-center">
      <div className="bg-[#2B2D42] p-10 rounded-2xl border border-white/5">
        <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      </div>

      {file && (
        <div className="space-y-4">
          <p className="font-mono text-xs">{file.name}</p>
          <div className="flex gap-4">
             <button className="flex-1 py-4 bg-[#FFD700] text-black font-bold rounded-xl opacity-50">To WAV</button>
             <button className="flex-1 py-4 bg-white/10 text-white font-bold rounded-xl opacity-50">To MP3</button>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Processing requires Web Audio API encoding</p>
        </div>
      )}
    </div>
  );
};

export default AudioConverter;
