import React, { useState } from 'react';
import InfoModals from './InfoModals';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const navItems: { label: string; type: ModalType }[] = [
    { label: 'About', type: 'about' },
    { label: 'Guide', type: 'guide' },
    { label: 'Contact', type: 'contact' },
  ];

  const footerLinks: { label: string; type: ModalType }[] = [
    { label: 'Privacy Policy', type: 'privacy' },
    { label: 'Terms of Service', type: 'terms' },
    { label: 'DMCA', type: 'dmca' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-100 flex flex-col relative z-10 selection:bg-pink-500/30">
      
      {/* Header */}
      <header className="backdrop-blur-md bg-galaxy-900/60 sticky top-0 z-40 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
            <div className="relative w-8 h-8">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12"></div>
               <div className="absolute inset-0 bg-gray-900 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="font-bold text-white text-lg">D</span>
               </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">Doodax</h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => openModal(item.type)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all px-3 py-1 rounded-full hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex flex-col w-full max-w-7xl mx-auto">
        {children}
      </div>

      {/* Footer */}
      <footer className="mt-24 bg-black/60 backdrop-blur-xl border-t border-white/5 py-16 relative overflow-hidden">
        {/* Decorative footer glow */}
        <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white">Doodax</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Empowering the web with inclusive design. Doodax is a free, professional-grade color contrast checker built to ensure the digital world is accessible to everyone.
              </p>
              <div className="flex gap-4 pt-4">
                {/* Social placeholders could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-6">Resources</h3>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                   <button 
                   key={item.label} 
                   onClick={() => openModal(item.type)}
                   className="text-sm text-gray-400 hover:text-white transition-colors text-left hover:translate-x-1 duration-200"
                 >
                   {item.label}
                 </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-6">Legal</h3>
              <div className="flex flex-col gap-3">
                {footerLinks.map((item) => (
                  <button 
                    key={item.label} 
                    onClick={() => openModal(item.type)}
                    className="text-sm text-gray-400 hover:text-white transition-colors text-left hover:translate-x-1 duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} doodax.com. All rights reserved.</p>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <span>Powered by</span>
              <a 
                href="https://github.com/hsinidev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 font-bold hover:text-purple-300 transition-colors flex items-center gap-1"
              >
                HSINI MOHAMED
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <InfoModals activeModal={activeModal} onClose={closeModal} />
    </div>
  );
};

export default ThemeLayout;