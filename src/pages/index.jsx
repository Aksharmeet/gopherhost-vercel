import * as React from 'react';

import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Seo from '@/components/Seo';

import Reviews from '../components/Reviews';
import TrustBanner from '../components/TrustBanner';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='font-nunito e text-base  text-black'>
        <Hero />
        <Features />
        <TrustBanner />
        <Pricing />
        <Reviews />
      </main>
    </>
  );
}
