
import React, { useState } from 'react';

const Base64Tool: React.FC = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const encode = () => {
    try {
      setText(btoa(text));
      setIsError(false);
    } catch { setIsError(true); }
  };

  const decode = () => {
    try {
      setText(atob(text));
      setIsError(false);
    } catch { setIsError(true); }
  };

  return (
    <div className="space-y-6">
      <textarea 
        className={`w-full h-48 bg-[#1E1E2F] p-4 rounded-xl border ${isError ? 'border-red-500' : 'border-white/10'} font-mono focus:ring-2 focus:ring-[#FFD700] outline-none`}
        placeholder="Enter text to encode or decode..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4">
        <button onClick={encode} className="flex-1 py-4 bg-[#FFD700] text-black font-bold rounded-xl hover:bg-[#E6C200]">Encode to Base64</button>
        <button onClick={decode} className="flex-1 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20">Decode from Base64</button>
      </div>
      {isError && <p className="text-red-500 text-center text-sm font-bold">⚠️ Invalid data for conversion!</p>}
    </div>
  );
};

export default Base64Tool;
