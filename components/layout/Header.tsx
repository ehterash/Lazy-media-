
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback if contact section doesn't exist, just scroll bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[72px] flex items-center ${
          isScrolled 
            ? 'bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Header specific styles for animations */}
        <style>{`
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: textShimmer 3s linear infinite;
          }
          @keyframes logoFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-3px) rotate(2deg); }
            75% { transform: translateY(3px) rotate(-2deg); }
          }
          .animate-logo-float {
            animation: logoFloat 4s ease-in-out infinite;
          }
        `}</style>

        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          
          {/* LEFT SIDE: Branding (Logo + Text) */}
          <div 
             className="flex items-center gap-3 cursor-pointer group" 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Logo Icon */}
            <div className="w-10 h-10 relative perspective-1000 animate-logo-float">
               <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-700 group-hover:[transform:rotateY(180deg)] preserve-3d">
                  <div className="w-4 h-4 bg-white rounded-full opacity-90 shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
               </div>
            </div>

            {/* Brand Text */}
            <span className="text-[24px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white animate-text-shimmer group-hover:from-purple-400 group-hover:via-cyan-300 group-hover:to-purple-400 transition-all duration-300">
              Lazy
            </span>
          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE: Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <Button 
                variant="white" 
                size="sm" 
                className="!px-6 !py-2.5 !text-sm !font-bold relative overflow-hidden active:scale-95 transition-transform"
                onClick={handleContactClick}
              >
                <span className="relative z-10">Let's Talk</span>
              </Button>
            </div>

            <button 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#0B0B0F]/95 backdrop-blur-xl z-40 transition-transform duration-300 pt-[72px] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-bold text-gray-300 hover:text-white hover:translate-x-4 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Action Button */}
          <div className="mt-4">
             <Button 
              variant="white" 
              fullWidth
              onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
              }}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
