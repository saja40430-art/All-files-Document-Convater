
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onOpen: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onOpen }) => {
  return (
    <div className="tool-card p-8 rounded-xl flex flex-col items-center text-center shadow-lg border border-white/5 group h-full">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {tool.icon}
      </div>
      <h2 className="text-2xl font-bold mb-3">{tool.title}</h2>
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
        {tool.description}
      </p>
      <button
        onClick={onOpen}
        className="w-full py-3 bg-[#FFD700] text-[#1E1E2F] font-bold rounded-[5px] hover:bg-[#E6C200] transition-colors uppercase tracking-widest text-sm"
      >
        Open Tool
      </button>
    </div>
  );
};

export default ToolCard;
