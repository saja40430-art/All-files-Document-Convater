
import React, { useState, useMemo } from 'react';
import { Tool, ToolID } from './types';
import ToolCard from './components/ToolCard';
import Modal from './components/Modal';
import ToolRenderer from './components/ToolRenderer';

const TOOLS: Tool[] = [
  { id: 'img-conv', title: 'Image Converter', description: 'Convert between JPG, PNG, and WEBP formats.', icon: '🖼️' },
  { id: 'img-comp', title: 'Image Compressor', description: 'Compress image file size with quality settings.', icon: '📉' },
  { id: 'img-crop', title: 'Image Cropper', description: 'Upload, crop, and export images.', icon: '✂️' },
  { id: 'vid-conv', title: 'Video Converter', description: 'Convert video formats (MP4 - WebM).', icon: '🎥' },
  { id: 'aud-conv', title: 'Audio Converter', description: 'Convert between MP3 and WAV formats.', icon: '🎵' },
  { id: 'aud-trim', title: 'Audio Trimmer', description: 'Trim audio clips with precise start/end times.', icon: '✂️' },
  { id: 'age-calc', title: 'Age Calculator', description: 'Calculate exact age in years, months, and days.', icon: '🎂' },
  { id: 'emi-calc', title: 'EMI Calculator', description: 'Calculate monthly loan installments and interest.', icon: '💰' },
  { id: 'sip-calc', title: 'SIP Calculator', description: 'Project future values of your monthly investments.', icon: '📈' },
  { id: 'qr-gen', title: 'QR Generator', description: 'Generate downloadable QR codes for any text/URL.', icon: '📱' },
  { id: 'pass-gen', title: 'Password Generator', description: 'Create secure, randomized passwords.', icon: '🔑' },
  { id: 'word-count', title: 'Word Counter', description: 'Live count of words, characters, and reading time.', icon: '📝' },
  { id: 'b64', title: 'Base64 Tool', description: 'Encode or decode plain text to Base64.', icon: '🔤' },
  { id: 'color-pick', title: 'Color Picker', description: 'Get HEX, RGB, and HSL values from any color.', icon: '🎨' },
  { id: 'tts', title: 'Text to Speech', description: 'Convert text into natural sounding voice.', icon: '🗣️' },
  { id: 'stt', title: 'Speech to Text', description: 'Transcribe your voice in real-time.', icon: '🎤' },
  { id: 'json-form', title: 'JSON Formatter', description: 'Auto-format and validate JSON data.', icon: '📦' },
  { id: 'unit-conv', title: 'Unit Converter', description: 'Convert length, weight, and temperature.', icon: '📏' },
  { id: 'bmi-calc', title: 'BMI Calculator', description: 'Check your health status with Body Mass Index.', icon: '⚖️' },
  { id: 'timer', title: 'Timer/Stopwatch', description: 'Precise time tracking for your tasks.', icon: '⏱️' },
];

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolID | null>(null);

  const selectedTool = useMemo(() => 
    TOOLS.find(t => t.id === activeTool), [activeTool]
  );

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-[#2B2D42] py-8 mb-12 shadow-xl sticky top-0 z-10 border-b border-[#FFD700]/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700] tracking-wider mb-2 drop-shadow-lg">
            🦜 Sajahan 🤑 Egay Convater All Tool 🔛
          </h1>
          <p className="text-gray-400 text-sm md:text-base">The Ultimate Modern Utility Hub</p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              onOpen={() => setActiveTool(tool.id as ToolID)} 
            />
          ))}
        </div>
      </main>

      {activeTool && (
        <Modal 
          isOpen={!!activeTool} 
          onClose={() => setActiveTool(null)} 
          title={selectedTool?.title || ''}
        >
          <ToolRenderer toolId={activeTool} />
        </Modal>
      )}

      <footer className="mt-20 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Sajahan Hub • Professional Frontend Toolkit</p>
      </footer>
    </div>
  );
};

export default App;
