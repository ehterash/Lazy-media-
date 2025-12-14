import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Business } from './components/sections/Business';
import { SocialProof } from './components/sections/SocialProof';
import { Capabilities } from './components/sections/Capabilities';
import { HolographicShowcase } from './components/sections/HolographicShowcase';
import { MatrixBackground } from './components/ui/MatrixBackground';
import { ParticleField } from './components/ui/ParticleField';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  // Konami Code Logic
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          activateConfetti();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const activateConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-500 selection:text-white relative">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Background Layers */}
      <MatrixBackground />
      <ParticleField />
      
      {/* Floating Gradient Orbs (Background Effects) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-cyan-900/5 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      {/* Konami Confetti (Simple CSS implementation for demo) */}
      {showConfetti && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="text-6xl animate-bounce">🎉 KONAMI CODE ACTIVATED! 🎉</div>
        </div>
      )}

      {/* Content wrapper */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <HolographicShowcase />
          <Services /> {/* Features */}
          <Capabilities /> {/* Stats included here */}
          <Portfolio />
          <About />
          <Business />
          <SocialProof /> {/* Testimonials */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;