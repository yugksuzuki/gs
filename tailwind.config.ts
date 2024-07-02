module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2.3': '2.3px',
      },
      borderRadius: {
        '2.67': '2.67px',
      },
      borderWidth: {
        '1': '1px',
      },
      opacity: {
        '35': '0.35',
      },
      mixBlendMode: {
        'normal': 'normal',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
