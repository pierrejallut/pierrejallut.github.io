import colors from "tailwindcss/colors";
import PrimeUI from "tailwindcss-primeui";

export default {
  plugins: [PrimeUI],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans"],
        serif: ["Spartan", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
};
