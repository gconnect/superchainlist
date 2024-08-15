import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
         // Using modern `rgb`
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        border: 'rgb(var(--color-border))',
        buttonColor: '#B80018',
        dark_button_bg: '#50556D',
        dark_toggle_bg: '#919AC0',
        dark_card_bg: '#1B1D29',  
        dark_card_text: '#D9D9D9',
        dark_icon_bg: '#919AC0',
        light_search_outline: '#DD95A3', 
        light_card_sidebar: '#BA2E2E',  
        light_card_bg: '#F5F4FB',
        light_icon_bg: '#E38793',
        light_button_bg: '#C85A5E',
        light_toggle_bg: '#E2B0BB'
      },
    },
  },
  plugins: [],
};
export default config;
