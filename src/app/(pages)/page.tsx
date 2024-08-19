'use client';

import { useLenis } from 'lenis/react';
import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/contactUs";
import {AnimatedLogoCloud} from "@/components/cloud-logo";
import Hero from "@/components/hero";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

export default function Home() {
  useLenis(({ scroll }) => {
    // You can add any scroll-based animations or effects here
    console.log('Current scroll position:', scroll);
  });

  return (
    <main className=''>
    <Hero />
      <AnimatedLogoCloud />
      <div className="h-full relative w-screen  flex md:flex-col md:items-center md:justify-center">
        <div className="relative z-20">
          <Services />
          <div className="w-screen  text-gray-50 font-semibold h-16 flex items-center pb-36 md:pb-40 lg:pb-24 pt-24 lg:pt-36">
            <Ticker />
          </div>
          <Aboutus />
          <Process />
          <ContactUs />
        </div>
      </div>
    </main>
  );
}