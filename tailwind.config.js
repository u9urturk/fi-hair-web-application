/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'ping-slow': 'ping 2s linear infinite'
      },
      colors:{
        'brand-color':'#507BB7',
        'brand-color-white':'	#ffffff'
      }
    },
    
  },
  plugins: [],
}