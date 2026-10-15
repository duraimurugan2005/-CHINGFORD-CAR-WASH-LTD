/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#101214',
          deep: '#0B0D0E',
          card: '#16191C',
        },
        graphite: {
          DEFAULT: '#1D2227',
          dark: '#15191D',
          light: '#272E35',
          border: '#2C343C',
        },
        lime: {
          accent: '#C6F36A',
          hover: '#B6E657',
          dim: 'rgba(198, 243, 106, 0.12)',
          glow: 'rgba(198, 243, 106, 0.25)',
        },
        silver: {
          soft: '#E5E7EB',
          muted: '#9CA3AF',
          dim: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'lime-glow': '0 0 25px -5px rgba(198, 243, 106, 0.35)',
      }
    },
  },
  plugins: [],
}
