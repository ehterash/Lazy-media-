import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entrance Animation
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const brandGradient = "linear-gradient(135deg, #7C3AED, #4F46E5)";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] flex items-center ${
          isScrolled 
            ? 'h-[60px] bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'h-[80px] bg-transparent border-b border-transparent'
        } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          
          {/* Logo */}
          <div 
             className="flex items-center gap-3 cursor-pointer group" 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`relative transition-all duration-500 perspective-1000 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
               <div 
                 className="w-full h-full rounded-lg shadow-lg flex items-center justify-center transition-transform duration-700 group-hover:[transform:rotateY(180deg)] preserve-3d"
                 style={{ background: brandGradient }}
               >
                  <div className="w-3 h-3 bg-white rounded-full opacity-90 shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
               </div>
            </div>
            <span 
              className={`font-extrabold tracking-tight text-transparent bg-clip-text animate-text-shimmer transition-all duration-500 ${isScrolled ? 'text-[20px]' : 'text-[24px]'}`}
              style={{ 
                backgroundImage: 'linear-gradient(to right, #ffffff, #d8b4fe, #ffffff)',
                backgroundSize: '200% auto'
              }}
            >
              Lazy
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 py-2 group ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100 + 200}ms` }}
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
                  style={{ background: brandGradient }}
                />
                <span className="absolute inset-0 bg-white/5 scale-0 rounded-lg group-hover:scale-100 transition-transform duration-300 -z-10" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className={`flex items-center gap-4 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <div className="hidden md:flex items-center">
              <Button 
                variant="white" 
                size="sm" 
                magnetic
                className="!px-6 !py-2.5 !text-sm !font-bold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
            </div>

            <button 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-transform active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#0B0B0F]/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] pt-[80px] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-3xl font-bold text-gray-300 hover:text-white hover:translate-x-4 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`mt-4 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
             <Button 
              variant="white" 
              fullWidth
              onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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