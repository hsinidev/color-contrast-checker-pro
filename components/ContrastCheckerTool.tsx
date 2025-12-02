import React, { useState, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import { hexToRgb, getLuminance, getContrastRatio } from '../utils/colorMath';

const ContrastCheckerTool: React.FC = () => {
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [bgColor, setBgColor] = useState('#A855F7');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contrastData = useMemo(() => {
    const textRgb = hexToRgb(textColor);
    const bgRgb = hexToRgb(bgColor);

    if (!textRgb || !bgRgb) {
      return { ratio: 1, aa: false, aaa: false };
    }

    const textLuminance = getLuminance(textRgb.r, textRgb.g, textRgb.b);
    const bgLuminance = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);
    const ratio = getContrastRatio(textLuminance, bgLuminance);

    return {
      ratio: Number(ratio.toFixed(2)),
      aa: ratio >= 4.5,
      aaa: ratio >= 7,
    };
  }, [textColor, bgColor]);

  const handleSuggestColors = async () => {
    setIsLoading(true);
    setSuggestion('');
    try {
      if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
      }
      // Correct: Initialization with named apiKey parameter.
      const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
      const prompt = `Given the background color ${bgColor}, suggest an accessible HEX color code for text that has a WCAG AAA contrast ratio (at least 7:1). Provide only the HEX code.`;
      
      // Correct: Use ai.models.generateContent for text generation.
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      // Correct: Use response.text to access the generated text.
      const suggestedColor = response.text.trim();
      
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(suggestedColor)) {
        setTextColor(suggestedColor);
        setSuggestion(`Suggested text color: ${suggestedColor}`);
      } else {
        setSuggestion('Could not get a valid color suggestion. Please try again.');
      }
    } catch (error) {
      console.error('Error suggesting colors:', error);
      setSuggestion('An error occurred while suggesting colors.');
    } finally {
      setIsLoading(false);
    }
  };

  const StatusPill: React.FC<{ pass: boolean }> = ({ pass }) => (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${pass ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
      {pass ? 'Pass' : 'Fail'}
    </span>
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Color Contrast Checker</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <label htmlFor="text-color" className="block text-sm font-medium mb-1">Text Color</label>
          <input type="color" id="text-color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-full h-10 p-1 border-gray-300 rounded" />
          <input type="text" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700" />
        </div>
        <div className="flex-1">
          <label htmlFor="bg-color" className="block text-sm font-medium mb-1">Background Color</label>
          <input type="color" id="bg-color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-full h-10 p-1 border-gray-300 rounded" />
          <input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700" />
        </div>
      </div>

      <div className="text-center p-8 rounded-lg mb-6" style={{ backgroundColor: bgColor, color: textColor }}>
        <p className="text-lg font-semibold">The quick brown fox jumps over the lazy dog.</p>
        <p>Contrast Ratio: <span className="font-bold text-2xl">{contrastData.ratio}:1</span></p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center mb-6">
        <div>
          <p className="font-semibold">WCAG AA</p>
          <StatusPill pass={contrastData.aa} />
        </div>
        <div>
          <p className="font-semibold">WCAG AAA</p>
          <StatusPill pass={contrastData.aaa} />
        </div>
      </div>
      
      <button onClick={handleSuggestColors} disabled={isLoading} className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300">
        {isLoading ? 'Thinking...' : '✨ Suggest Accessible Color'}
      </button>
      {suggestion && <p className="text-center mt-4 text-sm">{suggestion}</p>}
    </div>
  );
};

export default ContrastCheckerTool;
