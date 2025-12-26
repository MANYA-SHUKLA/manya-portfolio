module.exports = {
  content: [
    "./index.html", // For vanilla projects
    "./src/**/*.{js,ts,jsx,tsx}", // For React, Vite, etc.
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // For Next.js
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #0f6ebe,#11ffc0 )",
      },
      colors: {
        paragraph: "#252525", // Added here under `colors`
        textThemeColor: "#06d6a0",
        textWhiteColor: "#d8d1e2",
        inputColor: "#241c34",
        // backgroundColor: "#",
        backgroundColor: "rgb(11 1 28 / var(--tw-bg-opacity, 0.7))",
      },
      boxShadow: {
        navbar: '0px 0px 4px 0px rgba(255, 255, 255,0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      keyframes: {
        bounceHover: {
          "0%, 50%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(-7px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(20px) translateX(-10px)" },
          "66%": { transform: "translateY(-10px) translateX(10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatReverse: "floatReverse 8s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
