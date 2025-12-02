import React from 'react';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface InfoModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

const InfoModals: React.FC<InfoModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">About Doodax</h2>
            <p className="mb-4 text-lg">Doodax is a premier web accessibility tool designed to help developers, designers, and content creators ensure their digital products are inclusive for everyone.</p>
            <p className="mb-4">
              In a digital world that is constantly expanding, accessibility is not just a feature—it's a necessity. Doodax provides real-time analysis of color contrast ratios, ensuring compliance with WCAG 2.1 AA and AAA standards.
            </p>
            <p>
              Powered by advanced algorithms and Google's Gemini AI, we aim to bridge the gap between aesthetic design and functional accessibility.
            </p>
          </>
        );
      case 'contact':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">Contact Us</h2>
            <p className="mb-6">We value your feedback and are here to assist with any inquiries regarding Doodax.</p>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="font-bold text-gray-300 w-20">Website:</span> 
                  <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">doodax.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-gray-300 w-20">Email:</span> 
                  <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">hsini.web@gmail.com</a>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-gray-400">Our support team typically responds within 24-48 hours.</p>
          </>
        );
      case 'guide':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">User Guide</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Input Colors</h3>
                <p className="text-gray-300">Enter your Hex color codes (e.g., #FFFFFF) for both Text and Background. You can also use the color picker for visual selection.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Analyze Ratio</h3>
                <p className="text-gray-300">The tool automatically calculates the Contrast Ratio. 
                  <br/> - <span className="text-green-400">4.5:1</span> is required for AA Normal Text.
                  <br/> - <span className="text-green-400">3.0:1</span> is required for AA Large Text.
                  <br/> - <span className="text-green-400">7.0:1</span> is required for AAA Normal Text.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">3. AI Suggestions</h3>
                <p className="text-gray-300">Struggling to find a compliant color? Click the <strong>"Suggest Accessible Color"</strong> button. Our integrated AI will analyze your background and propose a text color that meets AAA standards while maintaining your design aesthetic.</p>
              </div>
            </div>
          </>
        );
      case 'privacy':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">Privacy Policy</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p><strong>Effective Date:</strong> October 2023</p>
              <p>At Doodax (doodax.com), accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax and how we use it.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">Information We Collect</h3>
              <p>Doodax is primarily a client-side tool. We do not require account registration. When you use our contact forms, we may collect your email address (hsini.web@gmail.com) solely to respond to your inquiries.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">Log Files</h3>
              <p>Doodax follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">Cookies and Web Beacons</h3>
              <p>Like any other website, Doodax uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

              <h3 className="text-lg font-bold text-white mt-4">Google DoubleClick DART Cookie</h3>
              <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.</p>
            </div>
          </>
        );
      case 'terms':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">Terms of Service</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p><strong>Last Updated:</strong> October 2023</p>
              <p>Welcome to Doodax!</p>
              <p>These terms and conditions outline the rules and regulations for the use of Doodax's Website, located at doodax.com.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">1. Acceptance of Terms</h3>
              <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Doodax if you do not agree to take all of the terms and conditions stated on this page.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">2. License</h3>
              <p>Unless otherwise stated, Doodax and/or its licensors own the intellectual property rights for all material on Doodax. All intellectual property rights are reserved. You may access this from Doodax for your own personal use subjected to restrictions set in these terms and conditions.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">3. User Content</h3>
              <p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Doodax a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
            </div>
          </>
        );
      case 'dmca':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-purple-400 border-b border-gray-700 pb-2">DMCA Notice</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Doodax respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement ("Infringement") of any person.</p>
              
              <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email at <strong>hsini.web@gmail.com</strong>.</p>
              
              <p>You must include in your notice a detailed description of the alleged Infringement.</p>
              
              <h3 className="text-lg font-bold text-white mt-4">Counter-Notice</h3>
              <p>If you believe that your Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your Content, you may send a counter-notice to us.</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-[#111827] border border-purple-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_50px_rgba(168,85,247,0.2)] animate-fade-in text-gray-100 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-900">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-2 rounded-full transition-all"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="prose prose-invert max-w-none">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InfoModals;