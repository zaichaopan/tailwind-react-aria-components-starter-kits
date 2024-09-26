const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.stores/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: 'hsl(var(--accent))',
        success: 'hsl(var(--success))',
        destructive: 'hsl(var(--destructive))',
        warning: 'hsl(var(--warning))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};
