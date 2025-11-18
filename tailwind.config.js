/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7EC7FF",    // 파스텔 블루
        secondary: "#FFD56B",  // 파스텔 옐로우
        accent: "#FFA3A3",     // 부드러운 레드
        bgLight: "#F9FAFD",    // 아이폰식 화이트
      }
    },
  },
  plugins: [],
}