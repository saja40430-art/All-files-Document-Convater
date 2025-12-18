
import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [password, setPassword] = useState('');

  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
      (includeNumbers ? "0123456789" : "") + 
      (includeSymbols ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : "");
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#2B2D42] p-6 rounded-lg text-center">
        <div className="text-2xl font-mono bg-[#1E1E2F] p-4 rounded border border-[#FFD700]/20 break-all mb-4">
          {password || 'Click Generate'}
        </div>
        <div className="flex gap-2">
          <button onClick={generate} className="flex-1 py-3 bg-[#FFD700] text-black font-bold rounded">Generate</button>
          <button onClick={copy} className="px-6 py-3 bg-white/10 text-white rounded font-bold hover:bg-white/20">Copy</button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-2">Password Length: {length}</label>
          <input type="range" min="8" max="64" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full accent-[#FFD700]" />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="accent-[#FFD700] w-5 h-5" />
            Numbers
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="accent-[#FFD700] w-5 h-5" />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
