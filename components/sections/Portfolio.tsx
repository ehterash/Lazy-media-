
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      year: "2024",
      title: "Lemonide Tech",
      features: ["AI Integration", "Responsive Design", "Custom Layouts", "Fast Loading"],
      tags: ["E-Commerce", "Portfolio"],
      images: [
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&q=80&w=800", // Watch/Tech High-End
        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800"  // Premium Phone/Metal
      ]
    },
    {
      year: "2025",
      title: "Viper Studio",
      features: ["Modern Typography", "User Friendly", "Flexible CMS", "SEO Optimized"],
      tags: ["Business", "Agency"],
      images: [
        "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&fit=crop&q=80&w=800", // Black Cap
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"  // High Fashion/Architecture
      ]
    },
    {
      year: "2025",
      title: "Million One",
      features: ["Easy Customization", "Interactive Elements", "Retina Ready", "High Performance"],
      tags: ["Portfolio", "Agency"],
      images: [
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800", // Grey Luxury Car
        "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800"  // Luxury Perfume/Product
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative bg-[#0B0B0F]/30 backdrop-blur-sm scroll-mt-24">
       {/* Ambient Background Glows for Depth */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Advanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal width="100%">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.3)]">
               <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
               <span className="text-xs font-bold text-purple-200 uppercase tracking-[0.2em]">Selected Works</span>
            </div>
          </Reveal>
          <Reveal width="100%" delay={100}>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Showcasing Your Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-400 animate-gradient-x">Work with Pure Precision.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={200}>
             <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
               A portfolio is more than just projects—it's your story, vision, and expertise. Reboot ensures your work stands out with a rank.
             </p>
          </Reveal>
          <Reveal width="100%" delay={300}>
            <Button variant="primary" size="lg" className="mx-auto rounded-full px-10 py-4 text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300">
               View More Works
            </Button>
          </Reveal>
        </div>

        {/* The "Million Dollar" Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
           {projects.map((project, index) => (
             <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* 1. Info Card (Left) */}
                <Reveal width="100%" delay={index * 100} className="h-full">
                   <div className="h-[400px] md:h-[500px] bg-[#121218] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                      {/* Interactive Glow Background */}
                      <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] group-hover:bg-purple-600/20 transition-all duration-700" />
                      
                      {/* Header: Year & Title */}
                      <div className="flex items-center gap-4 mb-8 relative z-10">
                         <div className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono font-bold shadow-inner">
                            {project.year}
                         </div>
                         <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                      </div>

                      {/* Feature List */}
                      <div className="flex-1 space-y-5 relative z-10">
                         {project.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 group/item">
                               <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover/item:scale-110 group-hover/item:bg-purple-500 transition-all duration-300">
                                  <Check size={12} className="text-white stroke-[4]" />
                               </div>
                               <span className="text-gray-400 font-medium text-lg group-hover/item:text-white transition-colors duration-300">{feat}</span>
                            </div>
                         ))}
                      </div>

                      {/* Tags Footer */}
                      <div className="mt-auto flex flex-wrap gap-2 relative z-10 pt-6 border-t border-white/5">
                         {project.tags.map((tag, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-[#1A1A23] border border-white/5 text-sm font-medium text-gray-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 cursor-default">
                               {tag}
                            </span>
                         ))}
                      </div>
                   </div>
                </Reveal>

                {/* 2. Middle Image Card */}
                <Reveal width="100%" delay={index * 100 + 100} className="h-full">
                   <div className="h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative group cursor-none">
                      <div className="absolute inset-0 bg-[#121218] animate-pulse-slow" /> {/* Loading state bg */}
                      <img 
                        src={project.images[0]} 
                        alt={`${project.title} 1`} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                      />
                      {/* Cinematic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Hover Interaction Hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                            <span className="text-white text-xs font-bold tracking-widest uppercase">View</span>
                        </div>
                      </div>
                   </div>
                </Reveal>

                {/* 3. Right Image Card */}
                <Reveal width="100%" delay={index * 100 + 200} className="h-full">
                   <div className="h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative group cursor-none">
                      <div className="absolute inset-0 bg-[#121218] animate-pulse-slow" />
                      <img 
                        src={project.images[1]} 
                        alt={`${project.title} 2`} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                       {/* Hover Interaction Hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                            <span className="text-white text-xs font-bold tracking-widest uppercase">View</span>
                        </div>
                      </div>
                   </div>
                </Reveal>

             </div>
           ))}
        </div>

      </div>
    </section>
  );
};
