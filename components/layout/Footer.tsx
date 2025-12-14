
import React from 'react';
import { Twitter, Instagram, Youtube, Framer, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Lazy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Made remotely with <Heart className="w-4 h-4 inline text-purple-500 fill-purple-500" /> and passion.
              <br />
              &copy; Westhill Studio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Template Pages</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 hover:text-white transition-colors"><Twitter size={16} /> Twitter (X)</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 hover:text-white transition-colors"><Instagram size={16} /> Instagram</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 hover:text-white transition-colors"><Youtube size={16} /> YouTube</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 hover:text-white transition-colors"><Framer size={16} /> Framer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Subscribe</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter Your Email..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-3 text-sm font-medium transition-colors">
                Subscribe Us
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 Mandro Design</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms & Conditions</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
