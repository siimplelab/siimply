module.exports = {
  content: [
    "./src/**/*.ejs",
    "./src/**/*.js",
    // Include other template paths if necessary
  ],


  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    ,
    extend: {
      borderWidth: {
        '1': '1px', // Add custom border width
      },
      colors: {
        primary: {
          200: '#EEF8EF',
          500: '#58B763'
        },
        secondary: {
          500: '#FFD900',
        },
        gray: {
          100: '#F4F6FA',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#C5C5C5',
          450: '#D1D5DB',
          500: '#9CA3AF',
          'medium': '#767676',
          'darker': '#555555',
        },
        black : '#1C1C1F'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #58B763, #FFD900)',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'smxs': '0.8125rem',
        base: '16px',
      }
    },
  },
  // Add other Tailwind configuration as needed
};
