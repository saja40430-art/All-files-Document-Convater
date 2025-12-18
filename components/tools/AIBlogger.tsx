
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIBlogger: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState('article');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      const systemInstruction = `You are an expert blogger and SEO specialist. 
      Generate high-quality content based on the user request. 
      If 'article' is selected, provide a full SEO-optimized blog post with headers. 
      If 'html' is selected, provide a complete, responsive HTML/CSS snippet for a blog section. 
      If 'titles' is selected, provide 10 catchy SEO headlines.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Type: ${type}. User prompt: ${prompt}`,
        config: { systemInstruction }
      });

      setResult(response.text || 'No response from AI.');
    } catch (error) {
      console.error(error);
      setResult("Error generating content. Please check your API key settings.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">What are you writing about?</label>
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Benefits of dark mode for developers..."
            className="w-full bg-[#1E1E2F] border border-[#FFD700]/30 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Output Type</label>
          <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-[#1E1E2F] border border-[#FFD700]/30 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            <option value="article">Full Blog Post</option>
            <option value="titles">10 SEO Headlines</option>
            <option value="html">HTML Layout Snippet</option>
            <option value="summary">Article Summary</option>
          </select>
        </div>
      </div>

      <button 
        onClick={generate}
        disabled={isLoading}
        className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all ${isLoading ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#FFD700] text-black hover:scale-[1.01] active:scale-100 shadow-xl shadow-[#FFD700]/10'}`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
            Generating Magic...
          </div>
        ) : (
          <>✨ Generate Content</>
        )}
      </button>

      {result && (
        <div className="bg-[#1E1E2F] rounded-2xl border border-white/5 p-8 shadow-inner">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#FFD700] font-bold uppercase tracking-widest text-sm">AI Result</h3>
            <button 
              onClick={() => { navigator.clipboard.writeText(result); alert('Copied!'); }}
              className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-gray-400"
            >
              📋 Copy to Clipboard
            </button>
          </div>
          <div className="prose prose-invert max-w-none whitespace-pre-wrap leading-relaxed text-gray-300">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBlogger;
