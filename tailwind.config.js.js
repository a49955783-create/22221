/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        policeBlue: "#1E3A8A",     // أزرق شرطة داكن
        policeGray: "#2E2E2E",     // رمادي غامق للخلفية
        policeLightGray: "#4B5563", // رمادي فاتح للعناصر
        policeAccent: "#60A5FA",   // لون أزرق فاتح للتوهج (Glow)
        policeRed: "#DC2626",      // أحمر للحالات الحرجة أو "مشغول"
        policeGreen: "#16A34A",    // أخضر للحالات "في الخدمة"
        policeYellow: "#FACC15",   // أصفر للحالات "تدريب / اختبار"
      },
      boxShadow: {
        glow: "0 0 20px rgba(96,165,250,0.6)", // توهج أزرق ناعم
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"], // خط عربي حديث ومقروء
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
