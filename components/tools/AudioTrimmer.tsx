
import React, { useState } from 'react';

const AudioTrimmer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#2B2D42] p-8 rounded-xl border border-white/5 text-center">
        <input type="file" accept="audio/*" onChange={handleUpload} className="mb-4" />
        {file && <p className="text-sm text-[#FFD700]">Loaded: {file.name}</p>}
      </div>

      {file && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Start Time (sec)</label>
              <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
            </div>
            <div>
              <label className="block text-sm mb-2">End Time (sec)</label>
              <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
            </div>
          </div>
          <button className="w-full py-4 bg-[#FFD700] text-black font-bold rounded-xl opacity-50 cursor-not-allowed">
            Processing Large Files requires WASM/WebAudio Logic...
          </button>
          <p className="text-xs text-center text-gray-500 italic">Advanced browser-side trimming logic implementation note: Typically requires AudioContext buffer splicing which is high-memory intensive.</p>
        </div>
      )}
    </div>
  );
};

export default AudioTrimmer;
