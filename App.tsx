import React from 'react';
import ThemeLayout from './components/ThemeLayout.tsx';
import ContrastCheckerTool from './components/ContrastCheckerTool.tsx';
import StaticSeoArticle from './components/StaticSeoArticle.tsx';
import GalaxyBackground from './components/GalaxyBackground.tsx';

function App() {
  return (
    <>
      <GalaxyBackground />
      <ThemeLayout>
        <main className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center">
          
          <div className="text-center mb-16 max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-fade-in">
                <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">The New Standard for Accessibility</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight animate-fade-in-down">
              Make the Web <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Accessible for All</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in delay-100">
              Doodax is the friendly, powerful tool for designers and developers. Check WCAG 2.1 contrast ratios instantly and get AI-powered color suggestions.
            </p>
          </div>

          <div className="w-full max-w-4xl mb-24 animate-fade-in delay-200">
            <ContrastCheckerTool />
          </div>
          
          <StaticSeoArticle />
        </main>
      </ThemeLayout>
    </>
  );
}

export default App;