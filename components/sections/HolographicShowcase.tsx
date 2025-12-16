import React, { useRef, useState, useEffect } from 'react';
import { Bot, Eye, BarChart3, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

// --- Types & Data ---
type ProductType = 'chatbot' | 'vision' | 'analytics' | 'voice';

interface ProductCard {
  id: number;
  type: ProductType;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  accent: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: 1,
    type: 'chatbot',
    title: 'Neural Chatbot',
    description: 'Advanced NLP that understands context, sentiment, and nuance in real-time.',
    icon: Bot,
    color: 'from-purple-600 to-indigo-500',
    accent: '#6366f1',
  },
  {
    id: 2,
    type: 'vision',
    title: 'Computer Vision',
    description: 'Next-gen object detection and facial recognition with 99.9% accuracy.',
    icon: Eye,
    color: 'from-indigo-600 to-purple-600',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    type: 'analytics',
    title: 'Predictive Data',
    description: 'Forecast trends before they happen with self-learning algorithms.',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-500',
    accent: '#a78bfa',
  },
  {
    id: 4,
    type: 'voice',
    title: 'Sonic Voice AI',
    description: 'Human-like synthesis and recognition for seamless voice interactions.',
    icon: Mic,
    color: 'from-indigo-500 to-violet-500',
    accent: '#818cf8',
  },
];

// --- Sub-Components for Card Internals ---

const ChatbotVisual = () => {
  const [messages, setMessages] = useState<number[]>([1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => prev.length < 3 ? [...prev, prev.length + 1] : [1]);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
      
      {messages.map((m, i) => (
        <div 
          key={m}
          className={`bg-indigo-900/40 border border-indigo-500/30 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm animate-float-sm ${i % 2 === 0 ? 'self-start rounded-tl-none' : 'self-end rounded-tr-none border-indigo-400/50 bg-indigo-800/50'}`}
          style={{ animationDelay: `${i * 0.5}s`, transitionDuration: '1s' }}
        >
          <div className="flex gap-2 items-center mb-1">
            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-indigo-400' : 'bg-white'} animate-pulse`} />
            <div className="h-1.5 w-12 bg-white/20 rounded-full" />
          </div>
          <div className="h-1.5 w-24 bg-white/10 rounded-full mb-1" />
          <div className="h-1.5 w-16 bg-white/10 rounded-full" />
        </div>
      ))}
      
      {/* Typing Indicator */}
      <div className="absolute bottom-4 left-4 flex gap-1 bg-black/40 p-2 rounded-full border border-white/10">
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
      </div>
    </div>
  );
};

const VisionVisual = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] animate-scan-line z-20" />
      
      <div className="absolute top-[30%] left-[20%] w-24 h-24 border-2 border-purple-500 rounded-lg opacity-80 animate-pulse-slow">
         <div className="absolute -top-5 left-0 bg-purple-500 text-black text-[10px] font-bold px-1">FACE 98%</div>
         <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1" />
         <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white translate-x-1 translate-y-1" />
      </div>

      <div className="absolute bottom-[20%] right-[30%] w-16 h-16 border border-purple-400/50 rounded-lg border-dashed animate-float-sm">
         <div className="absolute -bottom-5 right-0 bg-purple-400/80 text-black text-[10px] font-bold px-1">OBJ 45%</div>
      </div>
    </div>
  );
};

const AnalyticsVisual = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(c => (c + 123) % 9999), 500); // Slower updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-6 relative flex flex-col justify-end overflow-hidden">
       <div className="absolute top-4 right-4 text-violet-400 font-mono text-xl font-bold tracking-widest">
         +{count.toString().padStart(4, '0')}
       </div>
       <div className="flex items-end justify-between gap-2 h-32">
         {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
           <div 
            key={i} 
            className="w-full bg-violet-500/20 border-t-2 border-violet-400 rounded-t-sm relative group"
            style={{ height: `${h}%` }}
           >
             <div className="absolute bottom-0 w-full bg-violet-500/10 h-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
           </div>
         ))}
       </div>
    </div>
  );
};

const VoiceVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-1.5 relative overflow-hidden bg-indigo-900/10">
       <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
       {[...Array(9)].map((_, i) => (
         <div 
           key={i}
           className="w-3 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full animate-wave-stretch shadow-[0_0_15px_rgba(99,102,241,0.4)]"
           style={{ 
             height: '20%', 
             animationDelay: `${i * 0.2}s`, 
             animationDuration: '3s' 
           }}
         />
       ))}
    </div>
  );
};

const HoloCard: React.FC<{ product: ProductCard }> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 15; 
    const rotateX = ((y - centerY) / centerY) * -15;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateZ(20px)`;
    
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4), transparent 60%)`;
      glowRef.current.style.opacity = '0.4';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)`;
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  const VisualComponent = {
    chatbot: ChatbotVisual,
    vision: VisionVisual,
    analytics: AnalyticsVisual,
    voice: VoiceVisual
  }[product.type];

  return (
    <div 
      className="perspective-1000 w-[85vw] md:w-[400px] h-[600px] flex-shrink-0 snap-center group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-[30px] transition-transform duration-300 ease-out preserve-3d will-change-transform"
      >
        <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0 animate-border-spin" />
        <div className="absolute -inset-[1px] rounded-[31px] bg-[#0B0B0F] z-0" />

        <div className="absolute inset-0 rounded-[30px] overflow-hidden bg-[#13131a]/80 backdrop-blur-xl border border-white/10 shadow-2xl z-10 flex flex-col">
          
          <div 
            ref={glowRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-soft-light z-20 opacity-0"
          />
          
          <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${product.color} opacity-20 blur-[80px] rounded-full pointer-events-none transition-all duration-1000 group-hover:opacity-30`} />

          <div className="h-[55%] relative w-full border-b border-white/5 overflow-hidden group-hover:h-[50%] transition-all duration-700">
             <VisualComponent />
             <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-30">
               <product.icon className="text-white w-6 h-6" style={{ filter: `drop-shadow(0 0 5px ${product.accent})` }} />
             </div>
          </div>

          <div className="flex-1 p-8 flex flex-col relative z-30">
            <h3 className="text-3xl font-bold text-white mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{product.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 flex-1 opacity-80 group-hover:opacity-100 transition-opacity">{product.description}</p>
            
            <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
              <Button 
                variant="outline" 
                className="w-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md group/btn justify-between"
                style={{ borderColor: product.accent }}
              >
                <span style={{ color: product.accent }}>Learn More</span>
                <ArrowRight size={18} className="text-white group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const HolographicShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = 400 + 32; 
        const maxScroll = scrollWidth - clientWidth;
        
        let nextScroll = scrollLeft + cardWidth;
        if (nextScroll > maxScroll + 50) { 
          nextScroll = 0;
        }

        scrollRef.current.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
      }
    }, 6000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-32 relative bg-[#0B0B0F]/30 backdrop-blur-sm overflow-hidden">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line { animation: scan-line 8s linear infinite; }

        @keyframes wave-stretch {
          0%, 100% { height: 20%; opacity: 0.5; }
          50% { height: 80%; opacity: 1; }
        }
        .animate-wave-stretch { animation-name: wave-stretch; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 relative z-10 flex flex-col items-center text-center">
        <Reveal width="fit-content">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/20 border border-indigo-500/30 mb-6 backdrop-blur-sm">
             <Sparkles size={14} className="text-indigo-400" />
             <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Innovation Showcase</span>
          </div>
        </Reveal>
        <Reveal delay={100} width="100%">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Future-Ready AI Products.</h2>
        </Reveal>
        <Reveal delay={200} width="100%">
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Explore our suite of next-generation tools designed to integrate seamlessly into your digital ecosystem.</p>
        </Reveal>
      </div>

      <div 
        className="w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-6 md:px-[calc(50vw-200px)] py-12 snap-x snap-mandatory hide-scrollbar"
        >
          {PRODUCTS.map((product) => (
            <HoloCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#0B0B0F]/30 to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#0B0B0F]/30 to-transparent pointer-events-none z-20" />
      </div>

    </section>
  );
};