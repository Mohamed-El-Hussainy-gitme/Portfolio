/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Cairo", "system-ui", "sans-serif"],
        display: ["IBM Plex Sans Arabic", "system-ui", "sans-serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"]
      },
      colors: {
        multiverse: { bg: "#020617" }
      },
      boxShadow: {
        "glow-indigo": "0 0 80px rgba(129, 140, 248, 0.45)"
      }
    }
  },
  plugins: []
};
