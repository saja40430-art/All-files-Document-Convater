
import React, { useState } from 'react';

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-80 bg-[#1E1E2F] border border-[#FFD700]/20 p-4 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#FFD700] outline-none"
        placeholder='Paste JSON here e.g. {"key": "value"}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <div className="p-3 bg-red-500/20 text-red-400 border border-red-500/50 rounded text-sm">{error}</div>}
      <div className="flex gap-4">
        <button onClick={format} className="flex-1 py-3 bg-[#FFD700] text-black font-bold rounded">Beautify JSON</button>
        <button onClick={minify} className="flex-1 py-3 bg-white/10 text-white font-bold rounded">Minify JSON</button>
      </div>
    </div>
  );
};

export default JSONFormatter;
