import React, { useState } from 'react';

const StaticSeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="max-w-4xl mx-auto mt-24 mb-16 relative">
      
      {/* Decorative header glow */}
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-3/4 h-24 bg-purple-600/20 blur-[60px] rounded-full"></div>

      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
        
        <header className="p-8 md:p-12 border-b border-gray-700/50 bg-gray-800/20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6 leading-tight">
            Mastering Web Accessibility: The Ultimate Guide to Color Contrast & WCAG Compliance
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              25 Min Read
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
              Doodax Editorial Team
            </span>
            <span className="bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">Updated Oct 2023</span>
          </div>
        </header>

        <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[12000px]' : 'max-h-[140px] overflow-hidden'}`}>
          
          <div className="p-8 md:p-12 prose prose-lg prose-invert max-w-none prose-headings:text-gray-100 prose-a:text-purple-400 prose-strong:text-white">
            
            {/* Table of Contents */}
            <div className="not-prose bg-black/40 p-8 rounded-2xl mb-12 border border-white/5">
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider border-b border-white/10 pb-4">Table of Contents</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-base text-gray-300">
                <li><a href="#intro" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">01.</span> Introduction</a></li>
                <li><a href="#what-is-wcag" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">02.</span> Understanding WCAG 2.1</a></li>
                <li><a href="#science-of-contrast" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">03.</span> The Science of Contrast</a></li>
                <li><a href="#seo-impact" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">04.</span> SEO & Accessibility</a></li>
                <li><a href="#using-doodax" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">05.</span> Mastering Doodax</a></li>
                <li><a href="#legal" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">06.</span> Legal Implications</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500 font-mono">07.</span> FAQ</a></li>
              </ul>
            </div>

            <section id="intro">
              <h3>1. Introduction: The Era of Inclusive Design</h3>
              <p>
                The internet has evolved from a luxury to a fundamental utility. It is the primary way we learn, work, shop, and connect. However, for over 1 billion people worldwide living with some form of disability, the web remains full of barriers. 
                One of the most pervasive and easily fixable barriers is <strong>poor color contrast</strong>.
              </p>
              <p>
                Imagine trying to read light gray text on a white background while sitting in a sunlit park. Now, imagine that struggle is your everyday reality due to low vision or color blindness. 
                This is where tools like <strong>Doodax</strong> come into play. We didn't just build a calculator; we built a bridge to a more inclusive digital future.
              </p>
              <p>
                In this comprehensive guide, we will dive deep into the mechanics of web accessibility, the specifics of the Web Content Accessibility Guidelines (WCAG), and how you can leverage Doodax to create stunning, compliant, and user-friendly web experiences.
              </p>
            </section>

            <section id="what-is-wcag">
              <h3>2. Understanding WCAG 2.1: The Gold Standard</h3>
              <p>
                The <strong>Web Content Accessibility Guidelines (WCAG)</strong> are a set of technical standards developed by the World Wide Web Consortium (W3C). They are the yardstick by which accessibility is measured globally.
              </p>
              <h4>The Three Levels of Conformance</h4>
              <ul>
                <li><strong>Level A (Basic):</strong> Essential for some users to access content. Without this, the site is unusable for many.</li>
                <li><strong>Level AA (Intermediate):</strong> The global standard for most regulations (ADA, Section 508, GDPR). It ensures content is accessible to a wider range of people.</li>
                <li><strong>Level AAA (Advanced):</strong> The highest level of accessibility, often required for specialized government or healthcare sites.</li>
              </ul>
              <p>
                Doodax focuses on helping you achieve <strong>Level AA and Level AAA</strong> compliance for color contrast, specifically addressing Success Criteria 1.4.3 (Contrast Minimum) and 1.4.6 (Contrast Enhanced).
              </p>
            </section>

            <section id="science-of-contrast">
              <h3>3. The Science of Contrast: Luminance & Ratios</h3>
              <p>
                Color contrast isn't just about aesthetics; it's about math. The W3C defines contrast using a ratio of relative luminance between two colors.
              </p>
              <blockquote>
                "The contrast ratio ranges from 1:1 (white text on white background) to 21:1 (black text on white background)."
              </blockquote>
              <p>
                Why these specific numbers?
              </p>
              <ul>
                <li><strong>4.5:1 (AA Normal Text):</strong> This ratio was chosen because it compensates for the loss in contrast sensitivity reported by users with 20/40 vision, which is typical of people aged ~80.</li>
                <li><strong>3.0:1 (AA Large Text):</strong> Larger text (18pt+ or 14pt bold) is easier to read, so the contrast requirement is more lenient.</li>
                <li><strong>7.0:1 (AAA Normal Text):</strong> This higher standard accommodates users with 20/80 vision, providing exceptional clarity.</li>
              </ul>
              <p>
                Doodax uses precise algorithms to calculate these values instantly. You don't need to be a mathematician; you just need to know if your design passes or fails.
              </p>
            </section>

            <section id="seo-impact">
              <h3>4. Why Accessibility is the Secret Weapon of SEO</h3>
              <p>
                Many developers treat SEO (Search Engine Optimization) and Accessibility as separate silos. In reality, they are two sides of the same coin. Google's core mission is to organize the world's information and make it universally accessible and useful.
              </p>
              <h4>User Signals</h4>
              <p>
                If a user lands on your website and cannot read the text because of poor contrast, they will leave immediately. This increases your <strong>Bounce Rate</strong> and decreases <strong>Dwell Time</strong>—two critical metrics Google uses to rank pages.
              </p>
              <h4>Semantic Structure</h4>
              <p>
                Accessible sites tend to use cleaner, semantic HTML. Screen readers rely on proper heading structures (H1, H2, H3), alt tags, and ARIA labels. Coincidentally, search engine crawlers rely on these exact same elements to understand your content.
              </p>
              <p>
                By using Doodax to ensure your site is readable, you are directly improving your site's SEO performance.
              </p>
            </section>

            <section id="using-doodax">
              <h3>5. Mastering Doodax: More Than a Calculator</h3>
              <p>
                Doodax is designed to be the most comfortable and friendly contrast checker on the web. Here is how to get the most out of it:
              </p>
              <h4>The "Suggest" Feature</h4>
              <p>
                We've integrated Google's Gemini AI into Doodax. If your brand color fails accessibility tests, don't guess blindly. Click "Suggest Accessible Color". The AI analyzes your background color and mathematically finds the closest compliant shade that preserves your design intent.
              </p>
              <h4>Real-time Visualization</h4>
              <p>
                Numbers are abstract. That's why Doodax provides a live preview of your text on the background. You can see exactly how "The quick brown fox" looks in your chosen palette before you write a single line of CSS.
              </p>
            </section>

            <section id="legal">
              <h3>6. Legal Implications: ADA, Section 508, and EAA</h3>
              <p>
                Web accessibility is increasingly becoming a legal requirement.
              </p>
              <ul>
                <li><strong>USA (ADA):</strong> The Americans with Disabilities Act has been interpreted by courts to apply to websites. Thousands of lawsuits are filed annually against businesses with inaccessible sites.</li>
                <li><strong>Europe (EAA):</strong> The European Accessibility Act will enforce strict accessibility requirements for e-commerce, banking, and digital services by 2025.</li>
                <li><strong>Canada (ACA):</strong> The Accessible Canada Act aims for a barrier-free Canada by 2040.</li>
              </ul>
              <p>
                Using Doodax is a proactive step to mitigate legal risk and demonstrate a commitment to inclusivity.
              </p>
            </section>

            <section id="faq" className="mt-12 bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
              <h3>7. Frequently Asked Questions (FAQ)</h3>
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Q: Is Doodax completely free?</h4>
                  <p className="text-gray-300">Yes, Doodax is an open-source initiative. We believe accessibility tools should be free for everyone to encourage widespread adoption.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Q: Can I check gradients?</h4>
                  <p className="text-gray-300">Currently, WCAG standards apply to solid colors. For gradients, you should check the contrast of the text against the lightest and darkest parts of the gradient to ensure readability across the entire element.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Q: Does this tool work for mobile apps?</h4>
                  <p className="text-gray-300">Absolutely. The Hex codes you use in mobile app development (Swift, Kotlin, React Native) follow the same color theory principles. Doodax is platform-agnostic.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Q: What if I have branding constraints?</h4>
                  <p className="text-gray-300">This is a common challenge. If your brand orange fails on white, use Doodax to find a darker shade for text, or use your brand color for large headings (which have lower contrast requirements) and a darker neutral for body text.</p>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/20">
               <h3 className="text-white mb-2">Ready to audit your colors?</h3>
               <p>Scroll up to the Doodax tool and start creating a more inclusive web today.</p>
            </div>

          </div>

          {/* Fade overlay for collapsed state - Adjusted to be very tight (2 lines approx) */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 flex items-end justify-center pb-4 z-10">
               {/* Button is positioned absolutely on top of the mask in the parent container context usually, but here we can put it inside the flex container */}
            </div>
          )}
        </div>

        {/* Button Wrapper */}
        <div className="relative z-20 bg-gray-900 p-4 flex justify-center border-t border-gray-800">
            <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 offset-gray-900 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]"
            >
            <span className="mr-2">{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
            <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
        </div>
      </div>
    </article>
  );
};

export default StaticSeoArticle;