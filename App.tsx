
import React, { useState, useMemo } from 'react';
import { Tool, ToolID } from './types';
import ToolCard from './components/ToolCard';
import Modal from './components/Modal';
import ToolRenderer from './components/ToolRenderer';

const TOOLS: Tool[] = [
  { id: 'blogger-ai', title: 'AI Blogger Assistant', description: 'Generate professional blog posts, SEO titles, and HTML code with AI.', icon: '🧠', category: 'content' },
  { id: 'img-conv', title: 'Image Converter', description: 'Convert between JPG, PNG, and WEBP formats.', icon: '🖼️', category: 'media' },
  { id: 'img-comp', title: 'Image Compressor', description: 'Compress image file size with quality settings.', icon: '📉', category: 'media' },
  { id: 'img-crop', title: 'Image Cropper', description: 'Upload, crop, and export images.', icon: '✂️', category: 'media' },
  { id: 'vid-conv', title: 'Video Converter', description: 'Convert video formats (MP4 - WebM).', icon: '🎥', category: 'media' },
  { id: 'aud-conv', title: 'Audio Converter', description: 'Convert between MP3 and WAV formats.', icon: '🎵', category: 'media' },
  { id: 'aud-trim', title: 'Audio Trimmer', description: 'Trim audio clips with precise start/end times.', icon: '✂️', category: 'media' },
  { id: 'age-calc', title: 'Age Calculator', description: 'Calculate exact age in years, months, and days.', icon: '🎂', category: 'calc' },
  { id: 'emi-calc', title: 'EMI Calculator', description: 'Calculate monthly loan installments and interest.', icon: '💰', category: 'calc' },
  { id: 'sip-calc', title: 'SIP Calculator', description: 'Project future values of your monthly investments.', icon: '📈', category: 'calc' },
  { id: 'qr-gen', title: 'QR Generator', description: 'Generate downloadable QR codes for any text/URL.', icon: '📱', category: 'dev' },
  { id: 'pass-gen', title: 'Password Generator', description: 'Create secure, randomized passwords.', icon: '🔑', category: 'dev' },
  { id: 'word-count', title: 'Word Counter', description: 'Live count of words, characters, and reading time.', icon: '📝', category: 'content' },
  { id: 'b64', title: 'Base64 Tool', description: 'Encode or decode plain text to Base64.', icon: '🔤', category: 'dev' },
  { id: 'color-pick', title: 'Color Picker', description: 'Get HEX, RGB, and HSL values from any color.', icon: '🎨', category: 'dev' },
  { id: 'tts', title: 'Text to Speech', description: 'Convert text into natural sounding voice.', icon: '🗣️', category: 'content' },
  { id: 'stt', title: 'Speech to Text', description: 'Transcribe your voice in real-time.', icon: '🎤', category: 'content' },
  { id: 'json-form', title: 'JSON Formatter', description: 'Auto-format and validate JSON data.', icon: '📦', category: 'dev' },
  { id: 'unit-conv', title: 'Unit Converter', description: 'Convert length, weight, and temperature.', icon: '📏', category: 'calc' },
  { id: 'bmi-calc', title: 'BMI Calculator', description: 'Check your health status with Body Mass Index.', icon: '⚖️', category: 'calc' },
  { id: 'timer', title: 'Timer/Stopwatch', description: 'Precise time tracking for your tasks.', icon: '⏱️', category: 'dev' },
];

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolID | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS.filter(t => 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedTool = useMemo(() => 
    TOOLS.find(t => t.id === activeTool), [activeTool]
  );

  return (
    <div className="min-h-screen bg-[#1E1E2F]">
      <header className="bg-[#2B2D42] border-b border-[#FFD700]/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦜</span>
            <h1 className="text-xl md:text-2xl font-black text-[#FFD700] tracking-tighter">
              SAJAHAN HUB <span className="text-white/20 font-light">|</span> TOOLKIT
            </h1>
          </div>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search tools (e.g. AI, Converter, Calculator)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1E1E2F] border border-[#FFD700]/30 rounded-full px-6 py-2 text-sm focus:ring-2 focus:ring-[#FFD700] outline-none transition-all placeholder:text-gray-500"
            />
            <span className="absolute right-4 top-2.5 text-gray-500">🔍</span>
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden py-16 md:py-24 mb-12 border-b border-white/5 bg-gradient-to-b from-[#2B2D42] to-[#1E1E2F]">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            The Ultimate <span className="text-[#FFD700]">Blogger's</span> <br/>
            Productivity Workspace
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            20+ Professional tools for image processing, content generation, financial calculations, and development utilities. All-in-one, no signup required.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700] rounded-full blur-[150px]"></div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                onOpen={() => setActiveTool(tool.id as ToolID)} 
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 text-xl">No tools found matching your search.</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-[#FFD700] underline">Clear search</button>
            </div>
          )}
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

      <footer className="py-12 bg-[#2B2D42] text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-[#FFD700] text-3xl mb-4 font-black tracking-tighter">SAJAHAN HUB</div>
          <p className="text-gray-500 text-sm">Professional Web Utilities & Blogger Resources</p>
          <div className="flex justify-center gap-6 mt-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#FFD700]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFD700]">Terms of Use</a>
            <a href="#" className="hover:text-[#FFD700]">Contact Support</a>
          </div>
          <p className="mt-8 text-xs text-gray-600">© 2025 Sajahan Hub. Powered by Gemini AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
