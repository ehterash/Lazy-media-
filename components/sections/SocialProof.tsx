
import React, { useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      name: "John Smith", 
      role: "CEO, Innovate Solutions", 
      text: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence. The AI integration is seamless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    { 
      name: "Emily Davis", 
      role: "Product Manager, Nexus Digital", 
      text: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market. Absolute professionals.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    { 
      name: "David Lee", 
      role: "Founder, GreenLeaf Enterprises", 
      text: "Their innovative solutions helped streamline our operations. The neural architecture they deployed has increased our efficiency by 300%.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    { 
        name: "Sarah Chen", 
        role: "CTO, Future Systems", 
        text: "The AI capability they built is lightyears ahead of the competition. Stability, speed, and accuracy are simply unmatched in the industry.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
      },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-[#050508] relative overflow-hidden">
       {/* Advanced Background Grid/Glow */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          {/* Header - Centered & Premium */}
          <div className="text-center mb-20 relative">
             <Reveal width="100%">
               <div className="flex flex-col items-center gap-4">
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(147,51,234,0.2)]">
                     <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                     CLIENT STORIES
                   </div>
                   <h2 className="text-4xl md:text-6xl font-bold mt-2">
                     Trust Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Results.</span>
                   </h2>
               </div>
             </Reveal>
          </div>

          {/* Advanced Testimonial Card Display */}
          <div className="relative w-full max-w-4xl min-h-[500px] md:min-h-[400px]">
            {testimonials.map((testi, i) => {
               // Logic for transitions
               const isActive = i === currentIndex;
               
               return (
                   <div 
                     key={i}
                     className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        isActive 
                        ? 'opacity-100 translate-y-0 scale-100 z-20 pointer-events-auto' 
                        : 'opacity-0 translate-y-10 scale-95 z-0 pointer-events-none'
                     }`}
                   >
                       <div className="relative glass-card border border-white/10 bg-[#0a0a0f]/60 backdrop-blur-2xl rounded-[40px] p-8 md:p-14 shadow-2xl overflow-hidden group">
                          
                          {/* Animated Gradient Border */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          {/* Decorative Elements */}
                          <div className="absolute -top-10 -right-10 text-white/5 rotate-12 transform scale-150 pointer-events-none">
                              <Quote size={200} />
                          </div>
                          
                          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
                              {/* Avatar Section */}
                              <div className="relative shrink-0">
                                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-white to-cyan-500 relative z-10">
                                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0f]">
                                        <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                                      </div>
                                  </div>
                                  {/* Glow behind avatar */}
                                  <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full z-0" />
                                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0a0a0f] border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-purple-300 z-20 whitespace-nowrap">
                                      VERIFIED CLIENT
                                  </div>
                              </div>

                              {/* Content Section */}
                              <div className="text-center md:text-left flex-1">
                                  <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-6">
                                      {[1,2,3,4,5].map(star => (
                                          <Star key={star} size={18} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                                      ))}
                                  </div>
                                  
                                  <p className="text-xl md:text-2xl font-light text-gray-100 leading-relaxed mb-8 italic">
                                      "{testi.text}"
                                  </p>

                                  <div>
                                      <h4 className="text-2xl font-bold text-white mb-1">{testi.name}</h4>
                                      <p className="text-gray-400 font-medium">{testi.role}</p>
                                  </div>
                              </div>
                          </div>
                       </div>
                   </div>
               );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-12 z-20">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-white"
              >
                  <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
              </div>

              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-white"
              >
                  <ChevronRight size={20} />
              </button>
          </div>

       </div>
    </section>
  );
};
