import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowUpRight, Cpu, Globe, Lock, Zap, MessageSquare, LineChart } from 'lucide-react';

// Define interface for the feature item
interface FeatureItem {
  title: string;
  desc: string;
  icon: any;
  color: string;
  bg: string;
  gradient: string; // For the border gradient
  shadow: string;   // For the icon shadow
}

// Ultra-Smooth Tilt Card Component
const HolographicCard: React.FC<{ item: FeatureItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Get raw coordinates
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use RAF for smooth UI updates during movement
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;

        setCoords({ x, y });
        setOpacity(1);
        
        // Tilt Math - slightly reduced rotation for "heavier" premium feel
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6; 
        const rotateY = ((x - centerX) / centerX) * 6;

        // CRITICAL: Remove transition during movement for 1:1 tracking
        cardRef.current.style.transition = 'none';
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    setOpacity(0);
    // CRITICAL: Add transition back for smooth return
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'; 
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  return (
    <Reveal delay={index * 100} width="100%" variant="scale">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative p-8 rounded-3xl bg-[#13131a]/60 border border-white/5 backdrop-blur-xl h-[320px] flex flex-col justify-between overflow-hidden cursor-default hover:shadow-2xl hover:shadow-black/50 will-change-transform`}
      >
        {/* Holographic Gradient Overlay - Follows Mouse */}
        <div 
           className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
           style={{
             background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.04), transparent 40%)`,
             opacity: opacity
           }}
        />
        
        {/* Dynamic Colored Border Gradient on Hover */}
        <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ maskImage: 'linear-gradient(black, black)', WebkitMaskImage: 'linear-gradient(black, black)' }} />

        {/* Content */}
        <div className="relative z-10 pointer-events-none">
           <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) shadow-lg ${item.shadow}`}>
                <item.icon size={28} />
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
        </div>
        
        {/* Sliding Description */}
        <div className="relative z-10 pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
           <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
             {item.desc}
           </p>
           
           {/* Animated Underline matching card color */}
           <div className={`h-0.5 w-0 bg-gradient-to-r ${item.gradient.replace('via-', 'from-').replace('-500', '-400')} to-white mt-4 group-hover:w-full transition-all duration-700 ease-in-out`} />
        </div>
      </div>
    </Reveal>
  );
};

export const Services: React.FC = () => {
  // Exact Colors based on request:
  // 1. Neural Architecture (Purple)
  // 2. Global CDN Edge (Cyan)
  // 3. Quantum Security (Green)
  // 4. Instant Automation (Amber/Orange)
  // 5. Cognitive NLP (Rose/Pink)
  // 6. Predictive Scaling (Blue/Indigo)
  
  const features: FeatureItem[] = [
    {
      title: "Neural Architecture",
      desc: "Custom AI models built on proprietary frameworks for unmatched speed and reliability.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      gradient: "via-purple-500",
      shadow: "group-hover:shadow-purple-500/20"
    },
    {
      title: "Global CDN Edge",
      desc: "Deploy instantly to 300+ edge locations for near-zero latency worldwide.",
      icon: Globe,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      gradient: "via-cyan-500",
      shadow: "group-hover:shadow-cyan-500/20"
    },
    {
      title: "Quantum Security",
      desc: "Enterprise-grade encryption protecting your data at every layer of the stack.",
      icon: Lock,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      gradient: "via-emerald-500",
      shadow: "group-hover:shadow-emerald-500/20"
    },
    {
      title: "Instant Automation",
      desc: "Workflows that trigger in milliseconds, powering real-time decisions.",
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      gradient: "via-amber-500",
      shadow: "group-hover:shadow-amber-500/20"
    },
    {
      title: "Cognitive NLP",
      desc: "Natural language processing that understands context, not just keywords.",
      icon: MessageSquare,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      gradient: "via-rose-500",
      shadow: "group-hover:shadow-rose-500/20"
    },
    {
      title: "Predictive Scaling",
      desc: "Infrastructure that grows automatically before traffic spikes hit.",
      icon: LineChart,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      gradient: "via-blue-500",
      shadow: "group-hover:shadow-blue-500/20"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0a0a0f]/30 backdrop-blur-sm scroll-mt-24 relative overflow-hidden">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%" variant="up">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow duration-300">
              CORE FEATURES
            </div>
          </Reveal>
          <Reveal width="100%" delay={100} variant="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-text-shimmer">Next Generation</span></h2>
          </Reveal>
          <Reveal width="100%" delay={200} variant="up">
            <p className="text-gray-400 text-lg">Our stack is built different. We combine raw power with intelligent design.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
             <HolographicCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
