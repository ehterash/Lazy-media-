import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Lazy's Neural Assistant. How can I help accelerate your digital transformation today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize AI Client
  // Using process.env.API_KEY which is injected via index.html
  const [aiClient, setAiClient] = useState<GoogleGenAI | null>(null);

  useEffect(() => {
    if (process.env.API_KEY) {
      setAiClient(new GoogleGenAI({ apiKey: process.env.API_KEY }));
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !aiClient) return;

    const userMessage = inputValue;
    setInputValue('');
    setError(null);
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsThinking(true);

    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "You are Lazy, an advanced AI assistant for a high-end digital agency called Lazy. You are sophisticated, slightly futuristic, professional but witty. You help potential clients understand our services (AI Integration, Web Dev, Neural Networks). Keep answers concise and sales-oriented but helpful.",
        }
      });

      const text = response.text || "I'm having trouble connecting to the neural net right now.";
      setMessages(prev => [...prev, { role: 'model', text: text }]);
      
    } catch (err) {
      console.error(err);
      setError("Neural link unstable. Please check API key configuration.");
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please try again." }]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!aiClient) return null; // Don't render if no key

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto w-[350px] md:w-[400px] h-[500px] bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0 mb-4' : 'opacity-0 scale-90 translate-y-10 pointer-events-none h-0 mb-0'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Bot size={18} className="text-white" />
             </div>
             <div>
               <h3 className="font-bold text-white text-sm">Neural Assistant</h3>
               <div className="flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] text-gray-400">Online</span>
               </div>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
           {messages.map((msg, idx) => (
             <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div 
                 className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                   msg.role === 'user' 
                     ? 'bg-purple-600 text-white rounded-tr-sm' 
                     : 'bg-white/10 text-gray-200 rounded-tl-sm border border-white/5'
                 }`}
               >
                 {msg.text}
               </div>
             </div>
           ))}
           
           {isThinking && (
             <div className="flex justify-start">
               <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
             </div>
           )}
           
           <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-[#0a0a0f]/50">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask about our AI solutions..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isThinking}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-600 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-purple-400 transition-all"
            >
              <Send size={16} />
            </button>
          </div>
          {error && (
            <div className="mt-2 text-[10px] text-red-400 flex items-center gap-1">
              <AlertCircle size={10} />
              {error}
            </div>
          )}
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-110 transition-all duration-300 z-50"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <div className="relative">
            <MessageSquare size={24} className="text-white transform group-hover:-rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a0f]" />
          </div>
        )}
      </button>

    </div>
  );
};