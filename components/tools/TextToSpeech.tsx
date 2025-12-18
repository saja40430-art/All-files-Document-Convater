
import React, { useState } from 'react';

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState('');

  const speak = () => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => window.speechSynthesis.cancel();

  return (
    <div className="space-y-6">
      <textarea 
        className="w-full h-48 bg-[#1E1E2F] border border-white/10 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-[#FFD700]"
        placeholder="Type something to listen..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4">
        <button onClick={speak} className="flex-1 py-4 bg-[#FFD700] text-black font-bold rounded-xl text-lg flex items-center justify-center gap-2">
          <span>▶️</span> Listen Now
        </button>
        <button onClick={stop} className="px-6 py-4 bg-red-500/20 text-red-400 font-bold rounded-xl hover:bg-red-500/30">
          Stop
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
