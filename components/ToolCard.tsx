
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onOpen: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onOpen }) => {
  return (
    <div className="tool-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center shadow-lg border border-white/5 group h-full relative overflow-hidden">
      {/* Category Badge */}
      <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest text-[#FFD700]/40 group-hover:text-[#1E1E2F]/40">
        {tool.category}
      </span>
      
      <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 ease-out drop-shadow-lg">
        {tool.icon}
      </div>
      <h2 className="text-xl font-black mb-2 tracking-tight group-hover:tracking-normal transition-all">{tool.title}</h2>
      <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed px-2">
        {tool.description}
      </p>
      <button
        onClick={onOpen}
        className="w-full py-3.5 bg-[#FFD700] text-[#1E1E2F] font-black rounded-xl hover:bg-white transition-all shadow-lg shadow-[#FFD700]/5 uppercase tracking-tighter text-sm active:scale-95"
      >
        Launch Tool
      </button>
    </div>
  );
};

export default ToolCard;
