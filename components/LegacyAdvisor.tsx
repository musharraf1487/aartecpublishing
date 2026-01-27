
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const LegacyAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Welcome to AARTEC. I am the Legacy Intelligence Advisor. How can I assist with your authority transition today?"}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the AARTEC Legacy Advisor. 
          Context: We provide high-ticket ghostwriting, publishing, and executive team deployment (Humans as a Service).
          Aesthetics: Teal (#1e747b), Amber (#d97e1a), Charcoal (#333d42).
          Tone: Sophisticated, McKinsey-style consulting partner, elite, and selective.
          Task: Answer questions about AARTEC services and qualify leads for a strategy call.
          User Query: ${userMsg}`,
        config: {
          systemInstruction: "Respond with executive clarity. No fluff. Max 3 sentences. If the user mentions wealth, status, or complex business problems, steer them towards the Strategy Call.",
        }
      });

      const botText = response.text || "I apologize, my systems are currently recalibrating. Please proceed to book a call for direct consultation.";
      setMessages(prev => [...prev, {role: 'bot', text: botText}]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {role: 'bot', text: "System error. Please contact our humans via the Strategy Call link."}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      {isOpen ? (
        <div className="bg-white w-[380px] h-[550px] shadow-[0_30px_100px_rgba(30,116,123,0.3)] rounded-3xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-aartec-teal p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30 85L50 15L65 55L50 45L30 85Z" fill="#1e747b" />
                    <path d="M70 85L50 15L35 55L50 45L70 85Z" fill="#d97e1a" opacity="0.8" />
                  </svg>
               </div>
               <div>
                  <div className="text-white text-xs font-black uppercase tracking-widest">AARTEC ADVISOR</div>
                  <div className="text-aartec-amber text-[8px] font-bold uppercase tracking-[0.3em] mt-1">Status: Active</div>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
               <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Chat Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-aartec-charcoal text-white rounded-tr-none shadow-lg shadow-black/5' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 rounded-tl-none flex space-x-1 items-center">
                  <div className="w-1 h-1 bg-aartec-teal rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-aartec-teal rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-aartec-teal rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Prompt Engine */}
          <div className="p-6 border-t border-slate-100 bg-white">
            <div className="flex gap-3">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inquire about legacy protocols..."
                className="flex-1 bg-slate-50 border-none rounded-xl px-5 py-3 text-xs outline-none focus:ring-2 focus:ring-aartec-teal/20 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-aartec-teal text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-aartec-teal/90 disabled:opacity-30 shadow-lg shadow-aartec-teal/10"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-aartec-charcoal text-white w-20 h-20 rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 border-aartec-teal/30 hover:scale-110 hover:border-aartec-amber transition-all group relative"
        >
          <svg viewBox="0 0 100 100" className="w-10 h-10 group-hover:rotate-12 transition-transform">
            <path d="M30 85L50 15L65 55L50 45L30 85Z" fill="#1e747b" />
            <path d="M70 85L50 15L35 55L50 45L70 85Z" fill="#d97e1a" opacity="0.9" />
          </svg>
          <div className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aartec-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-aartec-amber shadow-sm"></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default LegacyAdvisor;
