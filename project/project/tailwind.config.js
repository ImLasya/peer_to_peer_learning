// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // scale: ['hover', 'active'],
      // opacity: ['group-hover'],
      // colors: {
      //   'cyber-black': '#0a0a0f',
      //   'neon-blue': '#00f3ff',
      //   'neon-pink': '#ff00ff',
      // },
      // backgroundImage: {
      //   'cyber-grid': `
      //     linear-gradient(rgba(10, 10, 15, 0.95) 1px, transparent 1px),
      //     linear-gradient(90deg, rgba(10, 10, 15, 0.95) 1px, transparent 1px)
      //   `,
      //   'grid-pattern': 'linear-gradient(to right, #00f3ff 1px, transparent 1px)'
      // },
      // backgroundSize: {
      //   'grid-size': '2px 2px'
      // },
      // boxShadow: {
      //   'neon-glow': '0 0 20px rgba(0, 243, 255, 0.3)',
      //   'pink-glow': '0 0 20px rgba(255, 0, 255, 0.3)'
      // },
      // colors: {
      //   'cyber-midnight': '#0a0a1a',
      //   'cyber-deep': '#070712',
      //   'neon-cyan': '#00ffff',
      //   'neon-magenta': '#ff00ff',
      //   'cyber-gray': '#b0b0d0'
      // },
      // boxShadow: {
      //   'cyan-glow': '0 0 30px rgba(0, 255, 255, 0.25)',
      //   'magenta-glow': '0 0 30px rgba(255, 0, 255, 0.25)'
      // },
      //  backgroundImage: {
      //   'cyber-grid': 'repeating-linear-gradient(45deg, transparent, transparent 2px, #0a0a1a 2px, #0a0a1a 4px)'
      // }
      // colors: {
      //   'cyber-black': '#0a0a0f',
      //   'cyber-deep': '#0f0f1f',
      //   'neon-blue': '#00f3ff',
      //   'neon-purple': '#7d4fff',
      //   'cyber-gray': '#a0a0c0'
      // },
      // boxShadow: {
      //   'blue-glow': '0 0 25px rgba(0, 243, 255, 0.3)',
      //   'purple-glow': '0 0 25px rgba(125, 79, 255, 0.3)'
      // }
      colors: {
        'cyber-deep': '#0f0f1f',
        'neon-cyan': '#00ffff',
        'neon-magenta': '#ff00ff',
        'cyber-gray': '#b0b0d0'
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0, 255, 255, 0.3)',
        'magenta-glow': '0 0 30px rgba(255, 0, 255, 0.3)'
      },
      backdropBlur: {
        '3xl': '48px',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
