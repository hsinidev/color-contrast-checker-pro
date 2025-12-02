import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-galaxy-900">
      <div className="cosmic-overlay"></div>
      
      {/* Stars and Clouds Layers (CSS animated in index.html) */}
      <div className="stars opacity-80"></div>
      <div className="twinkling"></div>
      <div className="clouds mix-blend-overlay"></div>
      
      {/* Multi-colored Nebula Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Central light source for readability */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full filter blur-[120px] opacity-30"></div>
    </div>
  );
};

export default GalaxyBackground;