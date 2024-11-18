import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      "color-primary-100": "#CAF9FA",
      "color-primary-200": "#98ECF6",
      "color-primary-300": "#61CFE6",
      "color-primary-400": "#39AACD",
      "color-primary-500": "#077AAC",
      "color-primary-600": "#055F93",
      "color-primary-700": "#03477B",
      "color-primary-800": "#023263",
      "color-primary-900": "#012452",
      "color-success-100": "#E8FAD4",
      "color-success-200": "#CCF6AB",
      "color-success-300": "#A2E57D",
      "color-success-400": "#79CC57",
      "color-success-500": "#45AA29",
      "color-success-600": "#2E921D",
      "color-success-700": "#1B7A14",
      "color-success-800": "#0D620D",
      "color-success-900": "#07510D",
      "color-info-100": "#D6E3FE",
      "color-info-200": "#ADC6FE",
      "color-info-300": "#85A6FD",
      "color-info-400": "#668CFB",
      "color-info-500": "#3462F9",
      "color-info-600": "#264AD6",
      "color-info-700": "#1A36B3",
      "color-info-800": "#102590",
      "color-info-900": "#091877",
      "color-warning-100": "#FFF1CC",
      "color-warning-200": "#FFE099",
      "color-warning-300": "#FFC966",
      "color-warning-400": "#FFB43F",
      "color-warning-500": "#FF9000",
      "color-warning-600": "#DB7200",
      "color-warning-700": "#B75700",
      "color-warning-800": "#933F00",
      "color-warning-900": "#7A2F00",
      "color-danger-100": "#FDE0D2",
      "color-danger-200": "#FCBAA6",
      "color-danger-300": "#F68A78",
      "color-danger-400": "#ED5E56",
      "color-danger-500": "#E22228",
      "color-danger-600": "#C2182D",
      "color-danger-700": "#A2112F",
      "color-danger-800": "#830A2E",
      "color-danger-900": "#6C062D"
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,

  })],
}
