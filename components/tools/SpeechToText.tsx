
import React, { useState, useEffect } from 'react';

const SpeechToText: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.onresult = (event: any) => {
        let current = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          current += event.results[i][0].transcript;
        }
        setTranscript(current);
      };
      rec.onend = () => setIsListening(false);
      setRecognition(rec);
    }
  }, []);

  const toggle = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      setTranscript('');
      recognition?.start();
      setIsListening(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="min-h-48 bg-[#1E1E2F] p-6 rounded-2xl border border-white/10 text-xl leading-relaxed">
        {transcript || <span className="text-gray-600 italic">Your speech will appear here...</span>}
      </div>
      <button 
        onClick={toggle}
        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/10'}`}
      >
        <span className="text-2xl">{isListening ? '🛑' : '🎙️'}</span>
        {isListening ? 'Stop Listening' : 'Start Recording'}
      </button>
      {!recognition && <p className="text-red-400 text-center text-sm">Speech recognition is not supported in this browser.</p>}
    </div>
  );
};

export default SpeechToText;
