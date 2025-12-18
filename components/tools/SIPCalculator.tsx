
import React, { useState } from 'react';

const SIPCalculator: React.FC = () => {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const i = rate / 100 / 12;
  const n = years * 12;
  const futureValue = Math.round(monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  const invested = monthly * n;
  const wealth = futureValue - invested;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-400">Monthly Investment (₹)</label>
            <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Expected Rate of Return (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Time Period (Years)</label>
            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
        </div>
        
        <div className="bg-[#2B2D42] p-8 rounded-2xl flex flex-col justify-center gap-6 border border-[#FFD700]/10">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Estimated Returns</div>
            <div className="text-5xl font-black text-[#FFD700]">₹{futureValue.toLocaleString()}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div className="text-center">
              <div className="text-xs text-gray-400">Invested Amount</div>
              <div className="text-lg font-bold">₹{invested.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400">Est. Wealth Gain</div>
              <div className="text-lg font-bold text-green-400">₹{wealth.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
