import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { // Only ONE extend object
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { // font-family extension is INSIDE the existing extend
        'gotham-bold': ['GothamBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'text-6xl',
    'text-5xl',
    'text-4xl',
    'text-3xl',
    'text-2xl',
    'text-xl',
    'text-lg'
  ]
} satisfies Config;