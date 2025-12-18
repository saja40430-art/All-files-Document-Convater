
import React, { useState, useEffect, useRef } from 'react';

const TimerStopwatch: React.FC = () => {
  const [mode, setMode] = useState<'stopwatch' | 'timer'>('stopwatch');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime(prev => mode === 'stopwatch' ? prev + 10 : Math.max(0, prev - 10));
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, mode]);

  const format = (ms: number) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const mil = Math.floor((ms % 1000) / 10);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${mil.toString().padStart(2, '0')}`;
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center gap-4">
        <button onClick={() => { setMode('stopwatch'); reset(); }} className={`px-6 py-2 rounded-full font-bold transition-all ${mode === 'stopwatch' ? 'bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20' : 'bg-white/5'}`}>Stopwatch</button>
        <button onClick={() => { setMode('timer'); reset(); setTime(60000); }} className={`px-6 py-2 rounded-full font-bold transition-all ${mode === 'timer' ? 'bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20' : 'bg-white/5'}`}>Timer</button>
      </div>

      <div className="text-7xl font-mono text-white bg-[#1E1E2F] py-16 rounded-3xl border border-[#FFD700]/20 shadow-inner">
        {format(time)}
      </div>

      <div className="flex justify-center gap-6">
        <button 
          onClick={() => setIsRunning(!isRunning)} 
          className={`w-24 h-24 rounded-full flex items-center justify-center text-xl font-bold transition-all ${isRunning ? 'bg-red-500 text-white' : 'bg-[#FFD700] text-black hover:scale-105'}`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button 
          onClick={reset} 
          className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold hover:bg-white/20"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerStopwatch;
