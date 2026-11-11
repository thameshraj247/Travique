<<<<<<< HEAD
const traviqueTailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A3B55',
          50:  '#f0f5fa',
          100: '#dce8f2',
          200: '#bed5e7',
          300: '#95bbd7',
          400: '#649bc2',
          500: '#336E9E',
          600: '#26557B',
          700: '#1E4665',
          800: '#163248',
          850: '#12283A',
          900: '#1A3B55',
          950: '#0B1924',
        },
        secondary: {
          DEFAULT: '#9E6738',
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
          700: '#A2703E',
          800: '#7F532B',
          900: '#573618',
          950: '#3D220C',
        },
        sand: {
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
          700: '#A2703E',
          800: '#7F532B',
          900: '#573618',
        },
        ocean: {
          950: '#0B1924',
          900: '#1A3B55',
          850: '#12283A',
          800: '#163248',
          700: '#1E4665',
          600: '#26557B',
          500: '#336E9E',
        },
        forest: {
          950: '#0B1924',
          900: '#1A3B55',
          850: '#12283A',
          800: '#163248',
          700: '#1E4665',
          600: '#26557B',
          500: '#336E9E',
        },
        teal: {
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
        }
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"Outfit"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    }
  }
};

if (typeof tailwind !== 'undefined') {
  tailwind.config = traviqueTailwindConfig;
} else {
  window.tailwind = { config: traviqueTailwindConfig };
}
=======
const traviqueTailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A3B55',
          50:  '#f0f5fa',
          100: '#dce8f2',
          200: '#bed5e7',
          300: '#95bbd7',
          400: '#649bc2',
          500: '#336E9E',
          600: '#26557B',
          700: '#1E4665',
          800: '#163248',
          850: '#12283A',
          900: '#1A3B55',
          950: '#0B1924',
        },
        secondary: {
          DEFAULT: '#9E6738',
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
          700: '#A2703E',
          800: '#7F532B',
          900: '#573618',
          950: '#3D220C',
        },
        sand: {
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
          700: '#A2703E',
          800: '#7F532B',
          900: '#573618',
        },
        ocean: {
          950: '#0B1924',
          900: '#1A3B55',
          850: '#12283A',
          800: '#163248',
          700: '#1E4665',
          600: '#26557B',
          500: '#336E9E',
        },
        forest: {
          950: '#0B1924',
          900: '#1A3B55',
          850: '#12283A',
          800: '#163248',
          700: '#1E4665',
          600: '#26557B',
          500: '#336E9E',
        },
        teal: {
          50:  '#FAF6F0',
          100: '#F4EADA',
          200: '#EAD8C0',
          300: '#DFC3A2',
          400: '#DEB17E',
          500: '#9E6738',
          600: '#C28D58',
        }
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"Outfit"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    }
  }
};

if (typeof tailwind !== 'undefined') {
  tailwind.config = traviqueTailwindConfig;
} else {
  window.tailwind = { config: traviqueTailwindConfig };
}
>>>>>>> 107638ee6bc6b2e4c7a4a43a5f47d9382c9597dd
