
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const bmi = Number((weight / Math.pow(height / 100, 2)).toFixed(1));
  
  const getCategory = () => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
    if (bmi < 25) return { label: 'Normal Weight', color: 'text-green-400' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-400' };
    return { label: 'Obese', color: 'text-red-400' };
  };

  const category = getCategory();

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block mb-2">Weight (kg): {weight}</label>
          <input type="range" min="30" max="200" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-[#FFD700]" />
        </div>
        <div>
          <label className="block mb-2">Height (cm): {height}</label>
          <input type="range" min="100" max="250" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-[#FFD700]" />
        </div>
      </div>

      <div className="bg-[#2B2D42] p-10 rounded-2xl text-center shadow-xl border border-white/5">
        <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Your BMI Score</div>
        <div className="text-6xl font-black text-[#FFD700] mb-4">{bmi}</div>
        <div className={`text-2xl font-bold ${category.color} px-4 py-2 bg-black/20 rounded-full inline-block`}>
          {category.label}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
