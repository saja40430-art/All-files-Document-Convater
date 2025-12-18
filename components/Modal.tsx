
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay overflow-y-auto">
      <div className="bg-[#1E1E2F] border border-[#FFD700]/20 rounded-xl w-full max-w-4xl shadow-2xl my-8">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#2B2D42] rounded-t-xl">
          <h2 className="text-2xl font-bold text-[#FFD700]">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl transition-colors"
          >
            &times;
          </button>
        </div>
        <div className="p-8 max-h-[80vh] overflow-y-auto text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
