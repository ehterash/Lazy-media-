import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { CheckCircle2, Clock, Zap, Activity, Users, Shield } from 'lucide-react';

export const Business: React.FC = () => {
  return (
    <>
      {/* Support Section */}
      <section className="py-32 bg-[#08080c]/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
           <Reveal width="100%" variant="right">
             <div className="relative h-[600px] w-full group perspective-1000">
                <div className="absolute top-0 left-0 w-[85%] h-[80%] rounded-[40px] overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 animate-float transition-all duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Advanced AI Support" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
                </div>
                 
                 <div className="absolute bottom-12 right-0 w-[55%] h-[45%] rounded-[30px] overflow-hidden z-0 shadow-2xl border border-white/5 opacity-80 transition-all duration-500 animate-float-delayed bg-[#1a1a20] group-hover:translate-x-4 group-hover:rotate-2">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                      alt="System Architecture" 
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    />
                 </div>

                {/* Professional Floating Card */}
                <div className="absolute top-[20%] -right-8 lg:-right-16 z-20 animate-pulse-slow w-[320px]">
                   <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/20 shadow-[0_30px_80px_rgba(139,92,246,0.15)] backdrop-blur-xl bg-[#121216]/90 transform rotate-6 hover:rotate-0 transition-transform duration-500 cursor-default hover:scale-105">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <CheckCircle2 size={20} className="text-indigo-400" />
                             </div>
                             <div>
                                <h4 className="font-bold text-white text-sm">System Optimized</h4>
                                <p className="text-[10px] text-gray-400">Ticket #AI-9920</p>
                             </div>
                         </div>
                         <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">Just now</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full w-[100%] bg-gradient-to-r from-purple-500 to-indigo-400 animate-[shimmer_2s_infinite]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400">
                           <span>Performance</span>
                           <span className="text-indigo-400">100%</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
           </Reveal>

           {/* Content Right */}
           <div className="relative">
              <Reveal variant="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider mb-6 hover-shake">
                  <Activity size={12} />
                  <span>24/7 LIVE MONITORING</span>
                </div>
              </Reveal>
              <Reveal delay={100} variant="up">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Always On. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-text-shimmer">Always Advanced.</span>
                </h2>
              </Reveal>
              <Reveal delay={200} variant="up">
                <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-lg">
                   Our autonomous AI agents monitor your infrastructure 24/7, resolving issues before they impact your business logic.
                </p>
              </Reveal>
              
              <div className="grid gap-6">
                {[
                  { icon: <Clock className="text-purple-400" />, title: "Zero Latency Response", desc: "Instantaneous issue detection and resolution." },
                  { icon: <Users className="text-indigo-400" />, title: "Human-in-the-loop", desc: "Expert engineers available when AI reaches confidence thresholds." },
                  { icon: <Shield className="text-violet-400" />, title: "Predictive Security", desc: "Threats neutralized before they breach the perimeter." }
                ].map((item, i) => (
                  <Reveal key={i} delay={300 + (i * 100)} width="100%" variant="left">
                     <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 group hover:translate-x-2">
                        <div className="p-3.5 rounded-xl bg-[#13131a] border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all shadow-lg group-hover:rotate-12">
                            {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1 text-white group-hover:text-purple-300 transition-colors">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  </Reveal>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Section - Ultra Modern */}
      <section className="py-32 relative overflow-hidden bg-[#050508]">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
         
         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center max-w-2xl mx-auto mb-20">
             <Reveal width="100%" variant="up">
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">Scalable Plans</h2>
             </Reveal>
             <Reveal width="100%" delay={100} variant="up">
                 <p className="text-gray-400 text-lg">Choose the perfect power level for your AI integration.</p>
             </Reveal>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$99", badge: "Entry Level", features: ["100k API Requests", "Basic Analytics", "Email Support", "Standard Latency"], highlight: false },
                { name: "Pro", price: "$599", badge: "Most Popular", features: ["1M API Requests", "Advanced Insights", "Priority 24/7 Support", "Global Edge CDN"], highlight: true },
                { name: "Enterprise", price: "Custom", badge: "Full Power", features: ["Unlimited Requests", "Dedicated Neural Net", "White-glove Service", "On-premise Option"], highlight: false },
              ].map((plan, i) => (
                <Reveal key={i} delay={i*150} className="h-full" width="100%" variant="scale">
                  <div className={`relative h-full flex flex-col p-10 rounded-[32px] transition-all duration-500 group cursor-default ${
                      plan.highlight 
                      ? 'bg-[#0f0f14] border border-purple-500/50 shadow-[0_0_80px_rgba(139,92,246,0.15)] scale-105 z-10 hover:shadow-[0_0_120px_rgba(139,92,246,0.25)] hover:-translate-y-4' 
                      : 'bg-[#0a0a0f] border border-white/5 hover:border-white/10 opacity-80 hover:opacity-100 hover:scale-[1.02] hover:-translate-y-2'
                  }`}>
                     {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg hover-shake">
                           MOST POPULAR
                        </div>
                     )}
                     
                     <div className="mb-8">
                        <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-300'}`}>{plan.name}</h3>
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                           {plan.price !== 'Custom' && <span className="text-gray-500">/mo</span>}
                        </div>
                     </div>

                     <hr className={`border-t ${plan.highlight ? 'border-purple-500/20' : 'border-white/5'} mb-8`} />
                     
                     <ul className="space-y-5 mb-10 flex-1">
                        {plan.features.map((feat, k) => (
                          <li key={k} className="flex items-center gap-3 text-sm font-medium text-gray-300 group/item">
                             <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover/item:scale-125 ${plan.highlight ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-500'}`}>
                                <CheckCircle2 size={12} />
                             </div>
                             <span className="group-hover/item:text-white transition-colors">{feat}</span>
                          </li>
                        ))}
                     </ul>
                     
                     <Button 
                        variant={plan.highlight ? 'primary' : 'outline'} 
                        fullWidth 
                        magnetic
                        className={plan.highlight ? 'shadow-lg shadow-purple-500/25' : ''}
                     >
                        Get Started
                     </Button>
                  </div>
                </Reveal>
              ))}
           </div>
         </div>
      </section>
    </>
  );
};