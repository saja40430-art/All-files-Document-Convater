
import React, { useState } from 'react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(120); // Months

  const r = rate / 12 / 100;
  const emi = Math.round((amount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1));
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-400">Loan Amount (₹)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-400">Interest Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-400">Tenure (Months)</label>
            <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full bg-[#1E1E2F] p-3 rounded border border-white/10" />
          </div>
        </div>
        
        <div className="bg-[#2B2D42] p-8 rounded-xl flex flex-col justify-center gap-6">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Monthly EMI</div>
            <div className="text-4xl font-black text-[#FFD700]">₹{emi.toLocaleString()}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div className="text-center">
              <div className="text-xs text-gray-400">Total Interest</div>
              <div className="text-lg font-bold">₹{totalInterest.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400">Total Payment</div>
              <div className="text-lg font-bold">₹{totalPayment.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
