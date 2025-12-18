
import React, { useState } from 'react';

const UnitConverter: React.FC = () => {
  const [val, setVal] = useState(1);
  const [type, setType] = useState<'len' | 'weight' | 'temp'>('len');

  const convert = (v: number) => {
    if (type === 'len') return { m: v, ft: (v * 3.28084).toFixed(2), in: (v * 39.3701).toFixed(2) };
    if (type === 'weight') return { kg: v, lb: (v * 2.20462).toFixed(2), oz: (v * 35.274).toFixed(2) };
    return { c: v, f: ((v * 9/5) + 32).toFixed(1), k: (v + 273.15).toFixed(1) };
  };

  const results = convert(val);

  return (
    <div className="space-y-8">
      <div className="flex gap-2 p-1 bg-[#1E1E2F] rounded-lg">
        {['len', 'weight', 'temp'].map(t => (
          <button key={t} onClick={() => setType(t as any)} className={`flex-1 py-3 rounded-md font-bold transition-all ${type === t ? 'bg-[#FFD700] text-black shadow-lg' : 'hover:bg-white/5'}`}>
            {t === 'len' ? 'Length' : t === 'weight' ? 'Weight' : 'Temp'}
          </button>
        ))}
      </div>

      <div className="bg-[#2B2D42] p-8 rounded-xl space-y-6">
        <div>
          <label className="block mb-2 text-gray-400">Input Value ({type === 'len' ? 'Meters' : type === 'weight' ? 'Kilograms' : 'Celsius'})</label>
          <input type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-4 rounded-xl border border-white/10 text-2xl font-bold" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(results).map(([unit, value]) => (
            <div key={unit} className="bg-black/20 p-4 rounded-lg border border-white/5">
              <div className="text-xs uppercase text-gray-500 font-bold mb-1">{unit}</div>
              <div className="text-2xl font-bold text-[#FFD700]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
