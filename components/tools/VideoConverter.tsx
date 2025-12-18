
import React, { useState } from 'react';

const VideoConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-6 text-center">
      <div className="bg-[#2B2D42] p-10 rounded-2xl border-2 border-dashed border-[#FFD700]/30">
        <input type="file" accept="video/mp4,video/webm" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <p className="mt-4 text-sm text-gray-400">Supported: MP4, WebM (Browser limits apply)</p>
      </div>

      {file && (
        <div className="space-y-4">
          <p className="text-[#FFD700] font-bold">Selected: {file.name}</p>
          <div className="flex gap-4">
             <button className="flex-1 py-4 bg-[#FFD700] text-black font-bold rounded-xl opacity-50 cursor-not-allowed">Convert to WebM</button>
             <button className="flex-1 py-4 bg-white/10 text-white font-bold rounded-xl opacity-50 cursor-not-allowed">Convert to MP4</button>
          </div>
          <p className="text-xs text-gray-500 italic">Notice: Heavy video processing usually requires FFmpeg.wasm for robust browser conversion. Current implementation is a UI layout for the capability.</p>
        </div>
      )}
    </div>
  );
};

export default VideoConverter;
