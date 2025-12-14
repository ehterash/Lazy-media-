
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { ArrowUpRight, Cpu, Globe, Lock, Zap, MessageSquare, LineChart } from 'lucide-react';

export const Services: React.FC = () => {
  const features = [
    {
      title: "Neural Architecture",
      desc: "Custom AI models built on proprietary frameworks for unmatched speed.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Global CDN Edge",
      desc: "Deploy instantly to 300+ edge locations for near-zero latency.",
      icon: Globe,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500/50"
    },
    {
      title: "Quantum Security",
      desc: "Enterprise-grade encryption protecting your data at every layer.",
      icon: Lock,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Instant Automation",
      desc: "Workflows that trigger in milliseconds, powering real-time decisions.",
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/50"
    },
    {
      title: "Cognitive NLP",
      desc: "Natural language processing that understands context, not just keywords.",
      icon: MessageSquare,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
    },
    {
      title: "Predictive Scaling",
      desc: "Infrastructure that grows automatically before traffic spikes hit.",
      icon: LineChart,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0a0a0f]/30 backdrop-blur-sm scroll-mt-24 relative overflow-hidden">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              CORE FEATURES
            </div>
          </Reveal>
          <Reveal width="100%" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Next Generation</span></h2>
          </Reveal>
          <Reveal width="100%" delay={200}>
            <p className="text-gray-400 text-lg">Our stack is built different. We combine raw power with intelligent design.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <Reveal key={index} delay={index * 100} width="100%">
              <div 
                className={`group relative p-8 rounded-3xl bg-[#13131a]/60 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${item.border}`}
              >
                {/* Hover Gradient Bloom */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color.replace('text-', 'from-')} to-transparent pointer-events-none`} />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`p-3 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={28} />
                  </div>
                  <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
