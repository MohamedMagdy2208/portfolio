/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        ink: "#0a0a0f",
        "ink-soft": "#10101a",
        "ink-panel": "#141722",
        cyan: { glow: "#22d3ee" },
        violet: { glow: "#a855f7" },
        emerald: { signal: "#34d399" },
        amber: { proof: "#f59e0b" },
      },
    },
  },
  plugins: [],
};
