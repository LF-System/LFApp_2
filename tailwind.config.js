/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Azul primário
        secondary: '#6c757d', // Cinza escuro
        success: '#28a745', // Verde claro
        danger: '#dc3545', // Vermelho
        warning: '#ffc107', // Amarelo claro
        info: '#17a2b8', // Azul claro
        light: '#f8f9fa', // Cinza claro
        dark: '#343a40', // Cinza escuro
      },
    },
 },
  plugins: [],
}