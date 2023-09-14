import '@/styles/globals.css';
import '@/styles/tailwind.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import smoothscroll from 'smoothscroll-polyfill';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  smoothscroll.polyfill();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
