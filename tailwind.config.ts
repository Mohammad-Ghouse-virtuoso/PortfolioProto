import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0a0e14',
          text: '#00ff41',
          dim: '#008f2d',
          glow: '#00ff41',
          error: '#ff4444',
          warning: '#ffaa00',
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'crt-flicker': 'crt-flicker 0.15s infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'text-glow': 'text-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'crt-flicker': {
          '0%': { opacity: '0.97' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.98' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'text-glow': {
          '0%': { textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41' },
          '100%': { textShadow: '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
