import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#003049",
      secondary: "#d62828",
      tertiary: "#77f00",
      backgroundColor: "#f2f4f5",
    },
    fontFamily:{
      'serif':['Helvetica', 'Arial', 'sans-serif'],
      'sans':['"Domine"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
});
