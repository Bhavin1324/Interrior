module.exports = {
  content: ["./assets/**/*.{html,js}", "*"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
