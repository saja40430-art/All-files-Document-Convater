
import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="space-y-6">
      <textarea 
        className="w-full h-64 bg-[#1E1E2F] border border-[#FFD700]/20 p-4 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#2B2D42] p-4 rounded text-center border border-white/5">
          <div className="text-2xl font-bold text-[#FFD700]">{wordCount}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">Words</div>
        </div>
        <div className="bg-[#2B2D42] p-4 rounded text-center border border-white/5">
          <div className="text-2xl font-bold text-[#FFD700]">{charCount}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">Chars</div>
        </div>
        <div className="bg-[#2B2D42] p-4 rounded text-center border border-white/5">
          <div className="text-2xl font-bold text-[#FFD700]">{readingTime}m</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">Read Time</div>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
