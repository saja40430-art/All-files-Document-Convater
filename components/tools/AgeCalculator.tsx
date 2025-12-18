
import React, { useState } from 'react';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState<{y:number, m:number, d:number} | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const today = new Date();
    
    let y = today.getFullYear() - birth.getFullYear();
    let m = today.getMonth() - birth.getMonth();
    let d = today.getDate() - birth.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
      y--;
      m += 12;
    }
    if (d < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      d += lastMonth.getDate();
      m--;
    }
    setAge({ y, m, d });
  };

  return (
    <div className="space-y-8">
      <div className="bg-[#2B2D42] p-8 rounded-xl text-center">
        <label className="block mb-4 text-xl font-bold">Select Date of Birth</label>
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)}
          className="bg-[#1E1E2F] border border-[#FFD700]/30 p-4 rounded text-white text-lg w-full max-w-sm mb-6 focus:ring-2 focus:ring-[#FFD700]"
        />
        <button onClick={calculate} className="block w-full max-w-sm mx-auto py-4 bg-[#FFD700] text-black font-bold rounded text-lg">Calculate Age</button>
      </div>

      {age && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#3A3D5B] p-6 rounded-lg text-center border-b-4 border-[#FFD700]">
            <div className="text-4xl font-black text-[#FFD700]">{age.y}</div>
            <div className="text-sm text-gray-400 font-bold uppercase">Years</div>
          </div>
          <div className="bg-[#3A3D5B] p-6 rounded-lg text-center border-b-4 border-[#FFD700]">
            <div className="text-4xl font-black text-[#FFD700]">{age.m}</div>
            <div className="text-sm text-gray-400 font-bold uppercase">Months</div>
          </div>
          <div className="bg-[#3A3D5B] p-6 rounded-lg text-center border-b-4 border-[#FFD700]">
            <div className="text-4xl font-black text-[#FFD700]">{age.d}</div>
            <div className="text-sm text-gray-400 font-bold uppercase">Days</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
