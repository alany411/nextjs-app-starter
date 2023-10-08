/** @type {import("prettier").Options & import("prettier-plugin-tailwindcss").options} */
const config = {
  jsxSingleQuote: true,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
