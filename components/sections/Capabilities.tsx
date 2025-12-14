
import React, { useEffect, useState, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { Zap, Mic, Shield, Layers, Check, ShoppingBag, Grip, Apple, Activity, Hexagon } from 'lucide-react';

// Counter Component
const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Capabilities: React.FC = () => {
  // Existing data...
  const tagsRow1 = ["Data Analysis", "Chatbots", "Capabilities", "Infrastructure"];
  const tagsRow2 = ["Cognitive", "Intelligent", "Infrastructure", "Capabilities"];
  const tagsRow3 = ["Chatbots", "Infrastructure", "Intelligent", "Data Analysis"];

  const stats = [
    { value: 98, suffix: '%', label: "Accuracy Rate" },
    { value: 500, suffix: '+', label: "Enterprise Clients" },
    { value: 12, suffix: 'M', label: "Predictions / Day" },
    { value: 24, suffix: '/7', label: "System Uptime" },
  ];

  // Waveform heights pattern
  const waveformHeights = [30, 50, 40, 70, 90, 60, 80, 50, 90, 60, 40, 70, 30, 50, 80, 40, 60, 90, 30];

  return (
    <section className="py-24 bg-[#0B0B0F]/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* CSS Animations */}
      <style>{`
        @keyframes scan { 0% { left: 2%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { left: 95%; opacity: 0; } }
        @keyframes fillWidth { 0% { width: 0%; } 100% { width: 100%; } }
        .animate-fill-width { animation: fillWidth 4s linear infinite; }
        @keyframes flowLine { 
            0% { stroke-dashoffset: 1000; opacity: 0; } 
            10% { opacity: 1; } 
            90% { opacity: 1; } 
            100% { stroke-dashoffset: 0; opacity: 0; } 
        }
        .animate-flow-line { animation: flowLine 3s linear infinite; }
        @keyframes floatSm { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .animate-float-sm { animation: floatSm 4s ease-in-out infinite; }
        
        /* New Animations for Speech Card - SLOWER (8s) */
        @keyframes clipProgress {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 0 0 0); }
        }
        .animate-clip-progress { animation: clipProgress 8s linear infinite; }
        
        @keyframes cursorProgress {
            0% { left: 0%; }
            100% { left: 100%; }
        }
        .animate-cursor-progress { animation: cursorProgress 8s linear infinite; }

        /* Active Wave Pulse Animation */
        @keyframes wavePulse {
            0%, 100% { transform: scaleY(1); opacity: 1; }
            50% { transform: scaleY(1.8); opacity: 0.8; }
        }
        .animate-wave-pulse { 
            animation: wavePulse 1.2s ease-in-out infinite;
            transform-origin: center;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- STATS SECTION --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-b border-white/5 pb-16">
           {stats.map((stat, i) => (
             <Reveal key={i} delay={i * 100} width="100%">
               <div className="text-center group cursor-default">
                 <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform duration-300">
                   <CountUp end={stat.value} suffix={stat.suffix} />
                 </div>
                 <div className="text-sm font-medium text-purple-400 uppercase tracking-widest">{stat.label}</div>
               </div>
             </Reveal>
           ))}
        </div>

        {/* --- CAPABILITY CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1: API */}
          <Reveal width="100%">
            <div className="bg-[#0f0f13] border border-white/5 rounded-[32px] p-8 h-full group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
               <div className="flex flex-col items-center text-center mb-auto relative z-20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    <Zap className="text-white w-6 h-6 fill-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Seamless API Integrations</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Lazy supports a wide range of third-party integrations.</p>
               </div>
               
               {/* Animated Flow Visual */}
               <div className="relative h-48 w-full mt-8 bg-[#050508] rounded-2xl border border-white/5 flex flex-col items-center justify-between py-6 overflow-hidden">
                 
                 {/* Top Icons Row */}
                 <div className="flex justify-between w-full px-6 relative z-10">
                    {[
                        { icon: Apple, label: 'Apple' },
                        { icon: Activity, label: 'Monday' },
                        { icon: ShoppingBag, label: 'Amazon' },
                        { icon: Grip, label: 'Blackberry' },
                        { icon: Hexagon, label: 'Honey' },
                        { icon: Check, label: 'Nike' }
                    ].map((Item, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#1a1a23] border border-white/10 flex items-center justify-center relative group/icon">
                            <Item.icon size={14} className="text-gray-400 group-hover/icon:text-white transition-colors" />
                        </div>
                    ))}
                 </div>

                 {/* Flow Lines SVG */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[20, 90, 160, 240, 310, 380].map((startX, i) => {
                        const startY = 50; const endX = 200; const endY = 150;
                        const cp1Y = 100; const cp2Y = 100;
                        const pathD = `M ${startX} ${startY} C ${startX} ${cp1Y}, ${endX} ${cp2Y}, ${endX} ${endY}`;
                        return (
                            <g key={i}>
                                <path d={pathD} fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
                                <path 
                                    d={pathD} 
                                    fill="none" 
                                    stroke="url(#lineGrad)" 
                                    strokeWidth="1.5"
                                    strokeDasharray="1000"
                                    className="animate-flow-line"
                                    style={{ animationDelay: `${i * 0.3}s` }}
                                />
                            </g>
                        );
                    })}
                 </svg>

                 {/* Central Hub Icon */}
                 <div className="relative z-10 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-600 to-indigo-600 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                        <div className="w-full h-full rounded-full bg-[#0B0B0F] flex items-center justify-center">
                            <Layers className="text-purple-400 w-6 h-6" />
                        </div>
                    </div>
                 </div>

               </div>
            </div>
          </Reveal>

          {/* Card 2: Auth */}
          <Reveal width="100%" delay={100}>
             <div className="bg-[#0f0f13] border border-white/5 rounded-[32px] p-8 h-full group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
               <div className="flex flex-col items-center text-center mb-auto relative z-20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    <Shield className="text-white w-6 h-6 fill-white/20" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Trusted Authentication</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Quickly integrate with major platforms.</p>
               </div>
               
               {/* Auth Visual Area */}
               <div className="relative h-48 w-full mt-8 bg-[#050508] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-purple-500/20 transition-colors">
                   <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-30 select-none pointer-events-none">
                       <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#050508_80%)]" />
                       <div className="flex gap-3 animate-marquee whitespace-nowrap">
                           {[...tagsRow1, ...tagsRow2, ...tagsRow1].map((tag, i) => (
                               <div key={i} className="px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-medium text-purple-300/50">{tag}</div>
                           ))}
                       </div>
                       <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap pl-8">
                           {[...tagsRow3, ...tagsRow1, ...tagsRow3].map((tag, i) => (
                               <div key={i} className="px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-medium text-purple-300/50">{tag}</div>
                           ))}
                       </div>
                       <div className="flex gap-3 animate-marquee whitespace-nowrap">
                           {[...tagsRow2, ...tagsRow3, ...tagsRow2].map((tag, i) => (
                               <div key={i} className="px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-medium text-purple-300/50">{tag}</div>
                           ))}
                       </div>
                   </div>
                   <div className="relative z-20 group-hover:scale-110 transition-transform duration-500">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/30 blur-xl rounded-full animate-pulse" />
                       <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] p-[2px] shadow-[0_8px_16px_rgba(124,58,237,0.4)] relative">
                           <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
                           <div className="w-full h-full rounded-full border-[3px] border-white/20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700">
                               <div className="absolute top-0 inset-x-0 h-1/2 bg-white/10" />
                               <Check className="w-6 h-6 text-white stroke-[4] drop-shadow-md" />
                           </div>
                       </div>
                   </div>
               </div>
            </div>
          </Reveal>

          {/* Card 3: Speech - UPDATED with SLOWER Animation and PULSING WAVES */}
          <Reveal width="100%" delay={200}>
            <div className="bg-[#0f0f13] border border-white/5 rounded-[32px] p-8 h-full group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
               <div className="flex flex-col items-center text-center mb-auto relative z-20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    <Mic className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI-Speech Recognition</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Navigate your site using speech.</p>
               </div>
               
               {/* Audio Visualizer UI */}
               <div className="relative h-48 w-full mt-8 bg-[#050508] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_14px]" />

                  <div className="relative z-10 w-full px-4">
                     <div className="flex flex-col items-start w-full">
                        {/* Tooltip Bubble */}
                        <div className="bg-[#6D28D9] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg mb-3 relative left-0 shadow-[0_4px_10px_rgba(109,40,217,0.4)] animate-float-sm">
                            Speech Recognition
                            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#6D28D9] rotate-45" />
                        </div>
                        
                        {/* Player Pill */}
                        <div className="bg-[#121212] border border-white/10 rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-2xl w-full relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
                            {/* Mic Button */}
                            <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-inner shrink-0 z-10 relative">
                                <Mic size={14} className="text-white" fill="white" />
                            </div>
                            
                            {/* Waveform Container */}
                            <div className="flex-1 h-5 relative z-0 px-1 mx-2 flex items-center">
                                
                                {/* Background Layer (Inactive/Gray) */}
                                <div className="absolute inset-0 flex items-center justify-between gap-[2px]">
                                    {waveformHeights.map((h, i) => (
                                        <div 
                                          key={i} 
                                          className="w-[3px] rounded-full bg-white/20"
                                          style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>

                                {/* Foreground Layer (Active/Purple) - Masked by Clip Path Animation */}
                                <div className="absolute inset-0 flex items-center justify-between gap-[2px] animate-clip-progress z-10">
                                    {waveformHeights.map((h, i) => (
                                        <div 
                                          key={i} 
                                          className="w-[3px] rounded-full bg-[#7C3AED] shadow-[0_0_8px_rgba(124,58,237,0.6)] animate-wave-pulse"
                                          style={{ 
                                            height: `${h}%`,
                                            animationDelay: `${i * 0.15}s` // Staggered pulse effect
                                          }}
                                        />
                                    ))}
                                </div>

                                {/* Animated Cursor/Playhead */}
                                <div className="absolute top-0 h-full w-[2px] bg-[#7C3AED] z-20 shadow-[0_0_10px_#7C3AED] animate-cursor-progress">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#7C3AED] rotate-45" />
                                </div>

                            </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
