
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Flame, Users, Lightbulb, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  // Ultra-Premium "Sexy" AI/Tech Images - High Resolution & Cohesive Dark Theme
  // Using reliable Unsplash IDs for 3D/Abstract content
  const orbitItems = [
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400", // 3D Shapes
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400", // Liquid Metal
    "https://images.unsplash.com/photo-1614728853913-1e22ba6e9dbe?auto=format&fit=crop&q=80&w=400", // Particles
    "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=400", // Crystal
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400", // Gradient Glass
    "https://images.unsplash.com/photo-1636955840493-f43a02bfa064?auto=format&fit=crop&q=80&w=400", // Dark Mesh
    "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=400", // Abstract Hex
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", // Tech Wall
    "https://images.unsplash.com/photo-1633167606207-d840b5070403?auto=format&fit=crop&q=80&w=400", // Cyber Sphere
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400", // Neon Flow
  ];

  return (
    <>
      <section id="about" className="py-24 relative overflow-hidden bg-[#0B0B0F]/30 backdrop-blur-sm scroll-mt-24">
         {/* Atmospheric Glow */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
            <Reveal width="100%">
              <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                WHO WE ARE
              </div>
            </Reveal>
            <Reveal width="100%" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Intelligence Era.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Team / Collaboration */}
            <Reveal delay={200} className="lg:col-span-2" width="100%">
              <div className="glass-card rounded-3xl p-8 h-[450px] relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500">
                 <div className="absolute inset-0 bg-[#0B0B0F] z-0" />
                 {/* Premium Image: Network / Connectivity */}
                 <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Global Network" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent z-10" />
                 
                 {/* Content */}
                 <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                   <div className="w-12 h-12 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                     <Users className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-bold mb-3 text-white">The Neural Collective</h3>
                   <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                     A distributed network of elite engineers, data scientists, and creative minds working in perfect synchronization to build the impossible.
                   </p>
                 </div>

                 {/* Decorative HUD Elements */}
                 <div className="absolute top-8 right-8 flex gap-2 z-20 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-cyan-300">
                       SYS: ONLINE
                    </div>
                    <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-purple-300 animate-pulse">
                       LIVE
                    </div>
                 </div>
              </div>
            </Reveal>

            {/* Card 2: Vision */}
            <Reveal delay={300} width="100%">
              <div className="glass-card rounded-3xl p-8 h-[450px] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500">
                 <div className="absolute inset-0 bg-[#0B0B0F] z-0" />
                 {/* Premium Image: Abstract Future/Eye */}
                 <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                    alt="Future Vision"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/0 via-[#0B0B0F]/50 to-[#0B0B0F] z-10" />
                 
                 {/* Floating Element */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse-slow pointer-events-none" />

                 <div className="relative z-20">
                   <div className="w-12 h-12 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                      <Lightbulb className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-6">
                     Democratizing AGI capabilities for enterprises worldwide. We don't just predict the future; we code it.
                   </p>
                 </div>
                 
                 <div className="relative z-20 mt-auto">
                    <Button variant="outline" size="sm" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 group/btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                      <span>Explore Roadmap</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REBUILT FEATURES SECTION (Orbit) */}
      <section id="features" className="relative h-[900px] bg-[#0B0B0F]/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-start scroll-mt-24">
        
        {/* CSS Variables for Responsive Radius Logic - UPDATED: Pivot moved UP */}
        <style>{`
          .orbit-pivot {
            top: 600px; /* Moved up from 700px to avoid overlap */
          }
          .orbit-translate {
             --radius: -600px; /* Radius of the orbit ring */
          }
          @media (min-width: 768px) {
            .orbit-pivot {
              top: 1300px; /* Moved up from 1400px to avoid overlap */
            }
            .orbit-translate {
               --radius: -1200px;
            }
          }
        `}</style>

        {/* Side Gradients for blending edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#0B0B0F] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#0B0B0F] to-transparent z-20 pointer-events-none" />

        {/* 
            ORBIT SYSTEM 
        */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            {/* The Pivot Point - Centered horizontally, pushed down vertically */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 orbit-pivot">
                {/* The Rotating Ring Container */}
                <div className="animate-rotate-orbit absolute top-0 left-0 w-0 h-0">
                    {orbitItems.map((img, i) => {
                        // Double the items for a fuller ring
                        const totalItems = orbitItems.length * 2;
                        const sourceImg = orbitItems[i % orbitItems.length];
                        const angleStep = 360 / totalItems;
                        const angle = i * angleStep;
                        
                        return (
                           <React.Fragment key={i}>
                            {/* Pass 1 */}
                            <div 
                                className="absolute top-0 left-0 flex items-center justify-center orbit-translate"
                                style={{
                                    transform: `rotate(${angle}deg) translateY(var(--radius))`
                                }}
                            >
                                <div className="transition-transform duration-500 hover:scale-125 cursor-pointer pointer-events-auto group">
                                    <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden border border-white/10 bg-[#16161d] shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-md relative transform -rotate-[${angle}deg]"> 
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
                                        <img 
                                          src={sourceImg} 
                                          alt="Feature" 
                                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'; // Fallback
                                          }}
                                        />
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>
                           </React.Fragment>
                        );
                    })}
                    {/* Duplicate set for density */}
                    {orbitItems.map((img, i) => {
                        const offset = orbitItems.length;
                        const totalItems = orbitItems.length * 2;
                        const angleStep = 360 / totalItems;
                        const angle = (i + offset) * angleStep;
                         return (
                            <div 
                                key={`dup-${i}`}
                                className="absolute top-0 left-0 flex items-center justify-center orbit-translate"
                                style={{
                                    transform: `rotate(${angle}deg) translateY(var(--radius))`
                                }}
                            >
                                <div className="transition-transform duration-500 hover:scale-125 cursor-pointer pointer-events-auto group">
                                    <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden border border-white/10 bg-[#16161d] shadow-2xl relative transform -rotate-[${angle}deg]">
                                        <img 
                                          src={img} 
                                          alt="Feature" 
                                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400';
                                          }}
                                        />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-cyan-500/50 rounded-3xl transition-all" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* Central Text Content */}
        <div className="relative z-30 text-center max-w-4xl px-6 mt-[200px] md:mt-[350px]">
           <Reveal width="100%">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-300 text-xs font-semibold mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md">
               <Flame className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
               <span className="tracking-widest">UNMATCHED FEATURES</span>
             </div>
           </Reveal>
           
           <Reveal delay={100} width="100%">
             <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white leading-none drop-shadow-2xl">
               Packed with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Innovation.</span>
             </h2>
           </Reveal>
           
           <Reveal delay={200} width="100%">
             <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
               Every pixel, every interaction, and every line of code is engineered to provide an unfair advantage in the digital landscape.
             </p>
           </Reveal>
           
           <Reveal delay={300} width="100%">
             <div className="flex flex-col md:flex-row gap-6 justify-center">
               <Button 
                  variant="primary" 
                  size="lg" 
                  className="shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] hover:scale-105 transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               >
                 Start Integration
               </Button>
               <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-black/20 backdrop-blur-md border-white/10 hover:bg-white/5"
               >
                 View Documentation
               </Button>
             </div>
           </Reveal>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0F] to-transparent z-40 pointer-events-none" />
      </section>
    </>
  );
};
