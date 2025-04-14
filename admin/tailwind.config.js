// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths based on your project
      './public/index.html', // For example, if you're using Create React App or similar setup
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FFF',  // Custom primary color
          secondary: '#ffed4a',  // Custom secondary color
          accent: '#38b2ac',  // Custom accent color
        },
        fontFamily: {
          sans: ['Inter', 'Arial', 'sans-serif'],  // Custom font for sans-serif
          serif: ['Merriweather', 'serif'],  // Custom font for serif
        },
        spacing: {
          18: '4.5rem',  // Custom spacing (example)
          22: '5.5rem',  // Another custom spacing value
        },
        borderRadius: {
          '4xl': '2rem',  // Custom border radius
        },
      },
    },
    plugins: [],
    darkMode: 'class', // Enabling dark mode as a class
    important: false, // Optional: Set to true if you want to apply !important to all classes
    corePlugins: {
      // Disable some core plugins if not needed
      preflight: true,  // Global reset styles
    },
  }
  