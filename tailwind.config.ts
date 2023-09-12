import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './index.html',
    './public/**/*.html',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/states/**/*.{js,jsx,ts,tsx}',
  ],
  important: true,
  theme: {
    extend: {},
    screens: {
      mobile: { max: '600px' },
      tablet: { max: '1080px' },
      desktop: { min: '1080px' },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
  },
  plugins: [],
};
export default config;
