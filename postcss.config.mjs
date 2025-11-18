const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
};

export default config;
