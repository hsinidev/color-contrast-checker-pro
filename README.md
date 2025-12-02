# Doodax Color Contrast Checker 🌌

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/Framework-React%2018-cyan)](https://reactjs.org/)

**The most beautiful, accessible, and user-friendly color contrast checker on the web.**

### [🚀 LIVE DEMO: doodax.com](https://doodax.com/tools/cosmic-color-contrast-checker/index.html)

---

## 📖 Overview

In the vast universe of web design, accessibility is your north star. **Doodax** (formerly Cosmic Contrast) helps designers and developers ensure their color choices meet WCAG 2.1 AA and AAA standards. 

Set against a stunning, animated galaxy background, this tool doesn't just check math—it provides an immersive experience. It features AI-powered color suggestions (via Google Gemini), instant pass/fail validation, and educational resources embedded directly into the interface.

## ✨ Key Features

- **Real-time WCAG Validation:** Check compliance for AA and AAA levels instantly as you type.
- **AI-Powered Suggestions:** Stuck? Let Gemini AI suggest the perfect, compliant color for you.
- **Visual Preview:** See your text and background paired in a real-world context.
- **Deep SEO Integration:** Built with JSON-LD Schema and semantic HTML for maximum discoverability.
- **Galaxy UI:** A multi-layered, animated parallax background using pure CSS.
- **Privacy First:** No data tracking. All calculations (except AI suggestions) are local.

## 📂 Project Structure

```
/
├── public/
│   ├── favicon.svg          # Brand icon
│   ├── robots.txt           # Crawler directives
│   └── sitemap.xml          # SEO sitemap
├── components/
│   ├── ContrastCheckerTool.tsx  # Main logic for contrast calculation
│   ├── GalaxyBackground.tsx     # Animated CSS background component
│   ├── InfoModals.tsx           # Content for Privacy, Terms, Guide, Contact
│   ├── StaticSeoArticle.tsx     # Long-form SEO content component with read-more
│   └── ThemeLayout.tsx          # Main layout wrapper
├── utils/
│   └── colorMath.ts        # Pure utility functions for WCAG math
├── App.tsx                 # App entry point
├── index.html              # HTML shell with critical CSS/Meta/Schema
└── README.md               # Documentation
```

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **AI Integration:** Google GenAI SDK (Gemini 2.5 Flash)
- **Build Tool:** Vite

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/doodax.git
    cd doodax
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment:**
    Create a `.env` file and add your Google Gemini API Key:
    ```
    API_KEY=your_api_key_here
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## 🙏 Credits

**Powered by [HSINI MOHAMED](https://github.com/hsinidev)**
